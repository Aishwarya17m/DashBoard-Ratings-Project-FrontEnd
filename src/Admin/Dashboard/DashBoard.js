import React, { useContext, useEffect, useState } from 'react'


import axios from 'axios'
import PieComponent from './PieComponent';
import LineComponent from './LineComponent';
import BarComponent from './BarComponent';
import Movies from '../../Movies';
import { MovieContext } from '../../MovieContext';
import DonutComponent from './DoughnutComponent'
import CardComponent from './CardComponent'

function DashBoard() {
  const [ratings,setratings]=useState([]);
  const [allRatings,setallRatings]=useState([]);
  const [users,setusers]=useState([]);


    const [movies] =useContext(MovieContext)

   

    useEffect(()=>{
   
        
      movies.forEach(element => {
        axios.get(`http://localhost:8282/user/getMovieRating/${element.movieId}`).then((res)=>{
                setratings(prev=>[...prev,res.data])
              })
            });
          
    axios.get("http://localhost:8282/user/getAllUsers").then(res=>{
      setusers(res.data)

    })
    axios.get("http://localhost:8282/admin/getallratings").then(res=>{
      setallRatings(res.data)
    })
          
      
    
    
   
  },[movies])
  return (
    <div>
      <Movies>
    <div className='admin-chart-view'>
        
         <CardComponent rdata={ratings} udata={users} allrdata={allRatings}/>
       
        <PieComponent/>
        <DonutComponent/>
       
       <BarComponent rdata={ratings}/>
      

        </div>
        <div>
          
        <LineComponent />
        </div>
       
        
       
        </Movies>
    </div>
    
    
  
  )
}

export default DashBoard