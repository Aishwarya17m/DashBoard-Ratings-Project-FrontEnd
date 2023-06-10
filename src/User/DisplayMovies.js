import axios from 'axios'
import React, {  useContext,useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Style/Displaymovies.css'
import { MovieContext } from '../MovieContext.js'

function DisplayMovies() {
   
    const {uid}=useParams();
   //const [movie,setmovies]=useState([])
   const [movies]=useContext(MovieContext)
    const [totalrating,settotalrating]=useState([])
    // const run=useRef(false)

   const fetchdata=()=>{
 console.time()
    movies.map(async element => {
      
        await axios.get(`http://localhost:8282/user/getMovieRating/${element.movieId}`).then(res1=>{
           settotalrating(counts=>({...counts,[element.movieId]:res1.data}))
          console.timeEnd()
     })
 })
}

         useEffect(()=>{
            
              fetchdata();
      

        },[movies])
        

  return (
    <div>

        <h3>Movie List</h3>
   
       
                        <div className='movie-container'>
                            
                            
                    
        {

           movies.map((m,i)=>{
                return(
                    <div key={m.movieId} className='movie-name-container'>

                       <div><Link to={`/AddRatings/${uid}/${m.movieId}`}> {m.movieName}</Link></div>
                        <span>({m.language})</span>
                        <div>
             
                        
                            {
                              
                               
                                //  totalrating.map((item)=>item[m.movieId])
                              
                                totalrating[m.movieId]
                                
                           
           
                        } &#x2B50;
                            </div>
                           <div>
                           
                            </div>
                           
                          
                        
                  
                        </div>
                       
                    

                       
                    
                )
            })
        }
     
        </div>

       
    </div>
  )
}

export default DisplayMovies