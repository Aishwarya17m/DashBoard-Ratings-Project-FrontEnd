import React, { useContext, useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie} from 'react-chartjs-2';
import { MovieContext } from '../../MovieContext';

ChartJS.register(ArcElement, Tooltip, Legend);
function PieComponent(props) {
const [count,setcount]=useState([])
  const [movies]=useContext(MovieContext)
  


    useEffect(()=>{
      let counts={}

       movies.forEach(element => {
          const language = element.language;
          counts[language] = counts[language] ? counts[language] + 1 : 1;
         
         
          
        });
     setcount(counts) 

    
    },[movies])

    
   
    
    
    
  

    
   

    const piedata = {
        labels: Object.keys(count),
        datasets: [
          {
            label: 'Movies',
            data:Object.values(count),
            backgroundColor: [
              '#db546e',  //red
              '#2b9d9d',  // green
              '#ecd627',   //yellow
              '#443dd1',   //blue
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              '#db546e',  //red
              '#2b9d9d',  // green
              '#ecd627',   //yellow
              '#443dd1',   //blue
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
    <div className='pie-chart-component'>
        
      
        <div className='pie-chart' style={{width:"300px",height:"300px",margin:"auto"}}>
        
        <Pie data={piedata}
        
         options={{
            plugins: {
             
                legend: {
                  display: true,
                  position:"right",
                  labels:{
                    usePointStyle:true
                  }
                },
             },
                responsive: true,
                maintainAspectRatio: false,
               
        }}
   />
        </div>
    </div>
  )
}

export default PieComponent