import React, { useCallback, useContext, useEffect, useState } from 'react'
import { MovieContext } from '../MovieContext'
import { Link } from 'react-router-dom'
import edit from '../images/edit-movie.png'
import ExcelExport from './ExcelExport'
import axios from 'axios'
import Paginate from '../Main/Paginate'
function DisplayMovies() {
  const [movies] = useContext(MovieContext)
  const [totalrating,settotalrating]=useState([])
  const [count,setcount]=useState([])
  const fileName = "moviesData"

  const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(6); 
    const indexOfLastPost = currentPage * moviesPerPage;
    const indexOfFirstPost = indexOfLastPost - moviesPerPage;
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
 
  const fetchdata=useCallback(()=>{ 
    let counter={}
   movies.map(element=>{
    axios.get(`http://localhost:8282/user/getMovieRating/${element.movieId}`).then(res1=>{
      settotalrating(counts=>({...counts,[element.movieId]:res1.data}))
     
    
    

  }
  )
  
 axios.get(`http://localhost:8282/user/getRatedUsers/${element.movieId}`).then(res=>{
 
  res.data.forEach(ele=>{

    const user = ele.movie.movieId;

  counter[user]=counter[user] ? counter[user] + 1 : 1
    
  })
         

 })

 setcount(counter)

  })



},[])

         useEffect(()=>{
            
          fetchdata();
          
      

        },[movies])

        const previousPage = () => {
          if (currentPage !== 1) {
             setCurrentPage(currentPage - 1);
          }
       };
     
       const nextPage = () => {
          if (currentPage !== Math.ceil(movies.length / moviesPerPage)) {
             setCurrentPage(currentPage + 1);
          }
       };
       const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
       };
  return (
    <div>
      <h3>Movie List</h3>    
      

      <div className='movie-container'>


{console.log(count)}
        {

          currentPosts.map((m) => {
            return (
              <div key={m.movieId} className='movie-name-container'>

                <div><Link to={`/movieDetails/${m.movieId}`}> {m.movieName} 
                <img src={edit} alt="edit-movie" style={{width: "15px",
    verticalAlign: "inherit"}}/></Link></div>
                <span>({m.language})</span>
                <div>{m.category}</div>
                
                {
                  isNaN(totalrating[m.movieId])===true?
                  <div>No ratings &#x2B50;</div>:
                  <div>{totalrating[m.movieId]} &#x2B50;({count[m.movieId]})
                  </div>
                 
                }
              
              </div>
            )
          })
        }
    

      </div>
  <div className='footer'>
     <div className='paginate-footer'>
      <Paginate
                  moviesPerPage={moviesPerPage}
                  totalmovies={movies.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
             
               />
               </div>
               <div>
                <ExcelExport total={totalrating} users={count} filename={fileName}/>
                </div>
               </div>
    </div>
  )
}

export default DisplayMovies