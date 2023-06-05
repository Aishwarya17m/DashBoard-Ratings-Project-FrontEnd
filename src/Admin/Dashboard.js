import React, { useEffect,useState } from 'react'
import axios from 'axios'
//import Chart from 'chart.js/auto'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
    const [languages,setlanguages]=useState([]);
    const [countmovies,setcountmovies]=useState([])
    const [movies,setmovies]=useState([]);

    const data = {
        labels: languages,
        datasets: [
          {
            label: 'Count of Movies',
            data:countmovies,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            options: {
                
                    labels: {
                        position: 'right'
                    }
                
            }
            
          },
        ],
    }
    useEffect(()=>{
        const lable=[]
        const counts = {};
        let moviecount=[]
        axios.get("http://localhost:8282/user/getMovies").then((res)=>{
          setmovies(res.data)
          res.data.forEach(element => {
          
            const language = element.language;
            counts[language] = counts[language] ? counts[language] + 1 : 1;
          });
       const values=Object.entries(counts)
 values.forEach(([key,value])=>{
lable.push(key)
    moviecount.push(value)
 })
 setlanguages(lable)
 setcountmovies(moviecount)
        })
    
        
    },[])

  return (
    <div>
        <div className='pie-chart' style={{width:"300px",height:"300px"}}>
        
        <Pie data={data}
         options={{
            responsive: true,
                maintainAspectRatio: false,
                
            
         }}
   />
        </div></div>
  )
}

export default Dashboard