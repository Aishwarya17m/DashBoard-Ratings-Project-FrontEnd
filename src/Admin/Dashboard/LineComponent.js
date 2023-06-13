import React,{useContext, useEffect,useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement} from 'chart.js';
 import {  Line} from 'react-chartjs-2';
import { MovieContext } from '../../MovieContext';

 ChartJS.register(CategoryScale,LinearScale,BarElement,PointElement,LineElement);
function LineComponent(props) {
    
    
    const [count,setcount]=useState([])
  const [movies]=useContext(MovieContext)
    
    useEffect(()=>{
      let counts={}
       movies.forEach(element => {
          const year = element.releaseDate;
          counts[year] = counts[year] ? counts[year] + 1 : 1;
        });
        setcount(counts)
    },[movies])

    const bardata = {
        labels: Object.keys(count),
        datasets: [
          {
            label: 'Count of Movies',
            labels:["mon"],
            data:Object.values(count),
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
         
            
          },
        ],
    }
  return (
    <div>
        Bar chart
       
        <div className='pie-chart' style={{width:"350px",height:"320px"}}>
        
        <Line data={bardata}
        
        options={{
        plugins:{
            scales:{
             yAxes:[{
                display:true,
                ticks:{
         
                  precision:0,
                stepSize:1
               
                
                }
                
             }]
            },
            
        }}
    }
             
             
             
         
   />
        </div>
    </div>
  )
}

export default LineComponent