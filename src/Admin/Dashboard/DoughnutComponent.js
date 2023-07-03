import React, { useContext, useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut} from 'react-chartjs-2';
import { MovieContext } from '../../MovieContext';
ChartJS.register(ArcElement, Tooltip, Legend);
function DoughnutComponent(props) {
const [count,setcount]=useState([])
  const [movies]=useContext(MovieContext)
  
    useEffect(()=>{
      let counts={}
       movies.forEach(element => {
          const category = element.category;
          counts[category] = counts[category] ? counts[category] + 1 : 1;
        });
     setcount(counts) 
    },[movies])

    const doughdata = {
        labels: Object.keys(count),
        datasets: [
          {
            label: 'Movies',
            data:Object.values(count),
            backgroundColor: [
              '#db546e',  //red
              '#2b9d9d',  // green
              '#d4c851',   //yellow
              '#443dd1',   //blue
              '#943ed4',   //violet
              '#e1a151' //orange
            ],
            borderColor: [
              '#db546e',  //red
              '#2b9d9d',  // green
              '#d4c851',   //yellow
              '#443dd1',   //blue
              '#943ed4',   //violet
              '#e1a151'    //orange
            ],
            borderWidth: 1,
            options: {
               
                
                
                
            }
            
          },
        ],
    }
  return (
    <div className='doughnut-chart-component'>
        
      
        <div className='dough-chart' style={{width:"300px",height:"300px",margin:"auto"}}>
        
        <Doughnut data={doughdata}
        
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

export default DoughnutComponent