import axios from 'axios'
import React, {  useCallback, useContext,useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Style/Displaymovies.css'
import { MovieContext } from '../MovieContext.js'
import Paginate from '../Main/Paginate.js'
import Filters from './Filters.js'
function DisplayMovies() {
    const {uid}=useParams();
    const [movies,setmovies]=useContext(MovieContext)
    const [totalrating,settotalrating]=useState([])
    const [searchdata,setsearchdata]=useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(6); 
    const indexOfLastPost = currentPage * moviesPerPage;
    const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  let currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
   const fetchdata=useCallback(()=>{
 
    movies.map(async element => {
      
        await axios.get(`http://localhost:8282/user/getMovieRating/${element.movieId}`).then(res1=>{
           settotalrating(counts=>({...counts,[element.movieId]:res1.data}))
          
     })
 })
},[movies])

const getAllMovies=()=>{
   axios.get("http://localhost:8282/user/getMovies").then(res => {
      setmovies(res.data)
  })
}
         useEffect(()=>{
            
              fetchdata();
      

        },[movies,searchdata,fetchdata])
        
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

         const changehandler=(e)=>{
     
          
            setsearchdata(e.target.value)
          
           if(e.target.value){
          const movie = movies.filter(r=>r.movieName.toLowerCase().includes(e.target.value.toLowerCase()))
         

          setmovies(movie)
          setCurrentPage(1);
           
              
             
           }
          
         
         else{
           getAllMovies()
         }
      }

          const optionhandler=(e)=>{

            if(e.target.value==="none"){
           getAllMovies();
        }
        else{
         axios.get("http://localhost:8282/user/getMovies").then(res => {
            const langs=res.data.filter(r=>r.language.toLowerCase().includes(e.target.value.toLowerCase()))
              
            setmovies(langs)
            
            setCurrentPage(1);
          })
        }
        }
   
  return (
    <div>

        <h3>Movie List</h3>
        <div>
         <Filters changehandler={changehandler} searchdata={searchdata}  optionhandler={optionhandler}/>
        </div>
   
       
                        <div className='movie-container'>
                            
                            
                    
        {

       currentPosts.map((m)=>{
                return(
                    <div key={m.movieId} className='movie-name-container'>

                       <div><Link to={`/AddRatings/${uid}/${m.movieId}`}> {m.movieName}</Link></div>
                        <span>({m.language})</span>
                            {
                              
                               
                              
                              
                                isNaN(totalrating[m.movieId])===true?
                                 <div>No ratings &#x2B50;</div>:
                                 <div>{totalrating[m.movieId]} &#x2B50; </div>
                                 
   
                        }
                            
                            
                           
                          
                            
                  
                        </div>
                       
                    

                       
                    
                )
            })
        }
     
        </div>
       <div className='paginate-footer'>
       <Paginate
                  moviesPerPage={moviesPerPage}
                  totalmovies={movies.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
             
               />
       </div>
       
    </div>
  )
}

export default DisplayMovies