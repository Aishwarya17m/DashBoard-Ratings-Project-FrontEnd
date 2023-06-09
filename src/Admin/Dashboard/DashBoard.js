import React, { useEffect, useState } from 'react'


import axios from 'axios'
import PieComponent from './PieComponent';
import LineComponent from './LineComponent';
import BarComponent from './BarComponent';

function DashBoard() {

    const [movies,setmovies]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8282/user/getMovies").then((res)=>{
            setmovies(res.data)
    })
    },[])
  return (
    <div className='admin-chart-view'>
        <PieComponent data={movies}/>
        <LineComponent data={movies}/>
        <BarComponent data={movies}/>
    </div>
  )
}

export default DashBoard