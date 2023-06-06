import React,{useEffect,useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement} from 'chart.js';
 import { Bar } from 'react-chartjs-2';

 ChartJS.register(CategoryScale,LinearScale,BarElement);
function BarComponent(props) {
    const [releasedate,setreleasedate]=useState([])
    const [countmovies,setcountmovies]=useState([])
 
    let counts={}

    useEffect(()=>{
      let lable=[]
      let moviecount=[]
 
       props.data.forEach(element => {
        
          const year = element.releaseDate;
          counts[year] = counts[year] ? counts[year] + 1 : 1;
        });
     const values=Object.entries(counts)
values.forEach(([key,value])=>{
lable.push(key)
  moviecount.push(value)
})
setreleasedate(lable)
setcountmovies(moviecount)
    
    },[props.data])

    const bardata = {
        labels: releasedate,
        datasets: [
          {
            label: 'Count of Movies',
            legend:["kannada"],
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
         
            
          },
        ],
    }
  return (
    <div>
        Bar chart
       
        <div className='pie-chart' style={{width:"400px",height:"400px"}}>
        
        <Bar data={bardata}
        
        options={{
        plugins:{
            scales:{
             yAxes:[{
                display:true,
                ticks:{
                stepSize:1
               
                
                }
                
             }]
            }
        }}
    }
             
             
             
         
   />
        </div>
    </div>
  )
}

export default BarComponent