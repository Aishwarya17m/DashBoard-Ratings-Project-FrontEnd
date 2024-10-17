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
          const year = element.releaseDate.split('-')[0];
          counts[year] = counts[year] ? counts[year] + 1 : 1;
        });
        setcount(counts)
    },[movies])

    const bardata = {
        labels: Object.keys(count),
        datasets: [
          {
            label: 'Count of Movies',
            
            data:Object.values(count),
            backgroundColor: [
              '#db546e',  //red
              '#2b9d9d',  // green
              '#ecd627',   //yellow
              '#443dd1',   //blue
              '#943ed4',   //violet
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              '#db546e',  //red
              '#2b9d9d',  // green
              '#ecd627',   //yellow
              '#443dd1',   //blue
              '#943ed4',   //violet
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
         
            
          },
        ],
    }
  return (
    <div className='line-chart-component'>
     
       
        <div className='line-chart' style={{width:"650px",height:"350px",margin:"auto"}}>
        
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