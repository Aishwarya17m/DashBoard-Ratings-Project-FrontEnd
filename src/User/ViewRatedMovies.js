import axios from 'axios'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import deleterating from '../images/deleterating.png'
import editrating from '../images/editrating.png'
import cancelrating from '../images/cancel.png'
import updaterating from '../images/accept.png'
import './Style/Addratings.css'
import Starcomponent from '../Main/Starcomponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountAsc,faSortAmountDesc} from '@fortawesome/free-solid-svg-icons'
import Paginate from '../Main/Paginate';
import Filters from './Filters';


function ViewRatedMovies(props) {
  const { uid } = useParams()
  const [ratings, setratings] = useState([])
  const [showedit, setshowedit] = useState(false);
  
   
  const [showclicked, setshowclicked] = useState("");
  const [updateRating, setupdateRating] = useState("")
   const [searchdata,setsearchdata]=useState("")


  const run = useRef(false)
  const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(6); 
  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentPosts = ratings.slice(indexOfFirstPost, indexOfLastPost);
  const [sort,setsort]=useState(false)


  const fetchdata = useCallback(() => {
 
    axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res => {
        setratings(res.data)
      
    })
  }
  
  , [uid])

  const deleteRating = (rid) => {
    axios.delete(`http://localhost:8282/user/deleteRating/${rid}`).then(res => {
      alert(res.data)
      fetchdata();

    })

  }
  const editRating = (rid) => {

    if (!updateRating) {
      alert("invalid rating")
    }
    else {
      const data = {
        rating: updateRating


      }

      axios.put(`http://localhost:8282/user/updateRating/${rid}`, data).then(res => {
        alert(res.data)
        fetchdata();

      })
    }

    const timer = setTimeout(() => {
      if(updateRating){
      setshowedit(false)
      setupdateRating("")
      }
    }, 2000);
    return () => clearTimeout(timer);

  }
  const clickhappens = (rid) => {
    setshowclicked(rid)
    setshowedit(true)


  }

  useEffect(() => {
    if (!run.current) {
      fetchdata();

      run.current = true
    }
  }, [fetchdata])

  const changehandler=(e)=>{
   
    setsearchdata(e.target.value)
    
    axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res => {
      const rate=res.data.filter(r=>r.movie.movieName.toLowerCase().includes(e.target.value.toLowerCase()))
        setratings(rate)
        

  })
  }
  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 }

 const nextPage = () => {
    if (currentPage !== Math.ceil(ratings.length / moviesPerPage)) {
       setCurrentPage(currentPage + 1);
    }
 };
 const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
 };
  const optionhandler=(e)=>{

    if(e.target.value!=="none"){
    axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res => {
      const langs=res.data.filter(r=>r.movie.language.toLowerCase().includes(e.target.value.toLowerCase()))
        setratings(langs)
        
    })
}
else{
    fetchdata();
}
}
const sorthandler=()=>{
 if(sort===false){
  axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res => {
    const sorting=res.data.sort((a,b)=>a.rating-b.rating)
  setratings(sorting)
  setsort(true)

  

 
 })
}
 else{
  axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res => {
    const sorting=res.data.sort((a,b)=>b.rating-a.rating)

  setratings(sorting)
  setsort(false)

 })
  
}}
 
  return (
    <div>
    
      <h3>Rated Movies</h3>
<div>
    
<Filters optionhandler={optionhandler}  changehandler={changehandler} searchdata={searchdata}/>
</div>

     
      <table className='rated-moviesList' style={{width: "95%"}}>   
        <tbody className='viewRatedMovies-container'>
          <tr className='viewRatedMovies-header'>
            <th>Movie Name</th>
            <th>Language</th>
            <th>Category</th>
            <th>Release Date</th>
            <th onClick={sorthandler} className='sorting'>Rating
            {
              sort?(<FontAwesomeIcon icon={faSortAmountDesc} /> ):(<FontAwesomeIcon icon={faSortAmountAsc} /> )
            }
              
              
            </th>
            <th>Update &#x2B50;</th>
          </tr>
          {  
        currentPosts.map((r, i) => {
              return (
                <tr key={r.ratingsId}>
                  <td> {r.movie.movieName}</td>
                  <td>{r.movie.language}</td>
                  <td>{r.movie.category}</td>
                  <td>{r.movie.releaseDate}</td>
                  <td>{r.rating}</td>

                  {
                    showclicked === r.ratingsId && showedit ?

                      <>
                        <td className='update-ratings'>
                          <Starcomponent  size={20} submit={e => setupdateRating(e)}/>
                          
                          </td>
                        <td><img src={updaterating} alt="accept" className='img-accept' onClick={() => editRating(r.ratingsId)} /></td>
                        <td><img src={cancelrating} alt="cancel" className='img-cancel' onClick={() => setshowedit(false)} /></td>

                      </>
                      :
                      <>
                        <td><img src={editrating} alt="edit" onClick={() => clickhappens(r.ratingsId)} />
                          <img src={deleterating} style={{ width: "35px" }} alt="delete" onClick={() => deleteRating(r.ratingsId)} /></td>
                      </>


                  }


                </tr>
              )
            })}
        
        </tbody>
      </table>
      <div className='paginate-footer'>
      <Paginate
                  moviesPerPage={moviesPerPage}
                  totalmovies={ratings.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
             
               />
        </div>
               
    
    </div>
   
  )
}

export default ViewRatedMovies