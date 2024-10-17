import React,{  useEffect,useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement} from 'chart.js';
 import {  Bar} from 'react-chartjs-2';
import '../Styles/AdminHome.css'
 ChartJS.register(CategoryScale,LinearScale,BarElement);
function BarComponent(props) {
    const [movies,setmovies]=useState([])
  
  
    
    useEffect(()=>{
      
      let counts={
        "No Rating":0,
        "1-2":0,
        "2-3":0,
        "3-4":0,
        "4-5":0,
        
      }
    
      
       props.rdata.forEach((rating) => {
       
      if(isNaN(rating)){
        counts["No Rating"] = counts["No Rating"] ? counts["No Rating"] + 1 : 1;
      }
        else  if(rating>=1 && rating<2){
          counts["1-2"] = counts["1-2"] ? counts["1-2"] + 1 : 1;
          }
        else if(rating>=2 && rating<3){
          counts["2-3"] = counts["2-3"] ? counts["2-3"] + 1 : 1;
          }
          else if(rating>=3 && rating<4){
            counts["3-4"] = counts["3-4"] ? counts["3-4"] + 1 : 1;;
            }
            else if(rating>=4 && rating<=5){
              counts["4-5"] = counts["4-5"] ? counts["4-5"] + 1 : 1;;
              }
        });
     
        setmovies(counts)


      
  
 

    },[props.rdata])
 
    const bardata = {
        labels: Object.keys(movies),
        datasets: [
          {
            label: 'Count of Movies',
            labels:["mon"],
            data:Object.values(movies),
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
    <div className="bar-chart-component">
     
        <div className='bar-chart' style={{width:"350px",height:"320px",margin:"auto"}}>
        
        <Bar data={bardata} className='bar-chart-view'
        
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

export default BarComponent