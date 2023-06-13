import axios from 'axios'
import React, { useCallback, useEffect ,useRef,useState} from 'react'
import { useParams } from 'react-router-dom'
import UserNavbar from './UserNavbar'
import './Style/Addratings.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from 'react-bootstrap/Button';

function AddRatings() {
    const [movies,setmovies]=useState([])
    const {mid}=useParams()
    const {uid}=useParams()
   let [ratings,setratings]=useState(0)
   const [rating,setrating]=useState(0)
   const run=useRef(false)


   const fetchdata=useCallback(()=>{
    
      axios.get(`http://localhost:8282/user/getMovie/${mid}`).then(res=>{
            setmovies([res.data])
 
    axios.get(`http://localhost:8282/user/getMovieRating/${mid}`).then(res=>{
 
              setratings(res.data)
             
          
                   
                    
        })
               
        })
    },[mid])


    useEffect(()=>{
        if(!run.current){   
            fetchdata();
         run.current=true
       }
    },[run,fetchdata])

    const rateMovie= (e)=>{

        e.preventDefault();
        const data={
         
            rating
        }
        
     if(rating.length===0){
        alert("add ratings")
     }else
        if(rating<1){
            alert("invalid rating")
        }
else{
      axios.post(`http://localhost:8282/user/rateMovie/${uid}/${mid}`,data).then(res=>{
            alert(res.data)
            window.location.href=`/UserHome/${uid}`
            
           
        }).catch(err=>{
            console.log(err)
        })
    }
    }
  return (
    <div>
   
        <UserNavbar/>
        <h5>AddRatings</h5>
 
       
                        <ul className='movie-ratings-container'>
                    
        {

            movies.map(m=>{
                return(
                    <div key={m.movieId}>
                       <li>Movie Name:  {m.movieName}</li>
                        <li>Language: {m.language}</li>
                        <li>Category: {m.category}</li>
                        <li>Release Year: {m.releaseDate}</li>

                        <li>Overall Ratings: {ratings} &#x2B50;</li>
                      
                         
                        <li><Stack spacing={1}>
                            Rate Movie:
                        <Rating name="half-rating" defaultValue={0} precision={0.5} value={parseFloat(rating)} onChange={e=>setrating(e.target.value)} size="large" />
                         </Stack></li>
                       
                        <li><Button onClick={rateMovie}>Submit</Button></li>
                        </div>
                  
                )
            })
        }
       </ul>
      
    </div>
  )
}

export default AddRatings