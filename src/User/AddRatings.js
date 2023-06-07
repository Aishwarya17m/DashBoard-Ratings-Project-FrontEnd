import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import UserNavbar from './UserNavbar'
import './Style/Addratings.css'
function AddRatings() {
    const [movies,setmovies]=useState([])
    const {mid}=useParams()
    const {uid}=useParams()
   let [ratings,setratings]=useState(0)
   const [rating,setrating]=useState(0)
   let run=false


   useEffect(()=>{
    if(!run){   
        fetchdata();
     run=true
   }
},[])

   const fetchdata=()=>{
    
      axios.get(`http://localhost:8282/user/getMovie/${mid}`).then(res=>{
            setmovies([res.data])
    let count=0
    axios.get(`http://localhost:8282/user/getMovieRating/${mid}`).then(res=>{
 
              setratings(res.data)
             
          
                   
                    
        })
               
        })
    }

    const rateMovie= (e)=>{

        e.preventDefault();
        const data={
         
            rating
        }
        if(rating.length===0){
            alert("enter rating")
        }
        else
        if(rating<5 && rating>5){
            alert("invalid rating")
        }
else{
      axios.post(`http://localhost:8282/user/rateMovie/${uid}/${mid}`,data).then(res=>{
            alert(res.data)
            
           
        }).catch(err=>{
            console.log(err)
        })
    }
    }
  return (
    <div>
   
        <UserNavbar/>
        AddRatings
 
       
                        <ul className='movie-ratings-container'>
                    
        {

            movies.map(m=>{
                return(
                    <div key={m.movieId}>
                       <li>Movie Name:  {m.movieName}</li>
                        <li>{m.language}</li>
                        <li>{m.category}</li>
                        <li>{m.releaseDate}</li>

                        <li>{ratings}</li>
                      
                        <li><input type="number" placeholder='add rating out of 5' min="1" max="5" value={rating} onChange={e=>setrating(e.target.value)} ></input>
                        <button onClick={rateMovie}>Rate Movie</button></li>
                        </div>
                  
                )
            })
        }
       </ul>
    </div>
  )
}

export default AddRatings