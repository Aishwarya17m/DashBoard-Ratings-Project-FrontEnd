import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Style/Displaymovies.css'
function DisplayMovies() {

    const {uid}=useParams();
    const [movies,setmovies]=useState([])
    const [totalrating,settotalrating]=useState([])
    let run=false;
    useEffect(()=>{
        if(!run){   
            fetchdata();
         run=true
       }
    },[])
    
  


const fetchdata=()=>{
        let counts={}
        axios.get("http://localhost:8282/user/getMovies").then(res=>{
            setmovies(res.data)
           res.data.forEach(element => {
                axios.get(`http://localhost:8282/user/getMovieRating/${element.movieId}`).then(res1=>{
                    
                const movieId = element.movieId;
                if(res1.data){
   counts[movieId]=res1.data
                
                
                  
   settotalrating([counts])
                }
                    
                   
                   
         
      
                  
                
            })
         
     
          
            }
            );
            
           
           })
         }
   


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
                   
                        
                        
                            {totalrating.map((item)=>item[m.movieId])}&#x2B50;
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