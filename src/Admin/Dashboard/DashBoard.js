import React, { useContext, useEffect, useState } from 'react'


import axios from 'axios'
import PieComponent from './PieComponent';
import LineComponent from './LineComponent';
import BarComponent from './BarComponent';
import Movies from '../../Movies';
import { MovieContext } from '../../MovieContext';

function DashBoard() {
  const [ratings,setratings]=useState([]);
  

    const [movies] =useContext(MovieContext)

   

    useEffect(()=>{
   
        
      movies.forEach(element => {
        axios.get(`http://localhost:8282/user/getMovieRating/${element.movieId}`).then((res)=>{
                setratings(prev=>[...prev,res.data])
              })
            });
          
    
          
      
      
    
   
  },[movies])
  return (
    <div className='admin-chart-view'>
        <Movies>
        <PieComponent />
        <LineComponent />
        
        <BarComponent rdata={ratings}/>
        </Movies>
       
      
    </div>
  )
}

export default DashBoard