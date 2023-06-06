import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie} from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
function PieComponent(props) {
  const [movies,setmovies]=useState([])
  
    useEffect(()=>{
      let counts={}
       props.data.forEach(element => {
          const language = element.language;
          counts[language] = counts[language] ? counts[language] + 1 : 1;
        });
     setmovies(counts) 
    },[props.data])

    const piedata = {
        labels: Object.keys(movies),
        datasets: [
          {
            label: 'Count of Movies',
            data:Object.values(movies),
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
               
                
                
                
            }
            
          },
        ],
    }
  return (
    <div>
        Pie chart
       
        <div className='pie-chart' style={{width:"300px",height:"300px"}}>
        
        <Pie data={piedata}
        
         options={{
            plugins: {
                legend: {
                  display: true,
                  position:"right",
                  labels:{
                    usePointStyle:true
                  }
                }},
                responsive: true,
                maintainAspectRatio: false,
        }}
   />
        </div>
    </div>
  )
}

export default PieComponent