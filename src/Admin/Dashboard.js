// import React, { useEffect,useState } from 'react'
// import axios from 'axios'
// //import Chart from 'chart.js/auto'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from 'chart.js';
// import { Pie,Bar } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

// function Dashboard() {
//     const [languages,setlanguages]=useState([]);
//     const [countmovies,setcountmovies]=useState([])
//     const [releasedate,setreleasedate]=useState([])
//     const [moviesyear,setmoviesyear]=useState([])
//     const [movies,setmovies]=useState([])

//     const data = {
//         labels: languages,
//         datasets: [
//           {
//             label: 'Count of Movies',
//             data:countmovies,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//             options: {
               
                
                
                
//             }
            
//           },
//         ],
//     }
//     const barchartdata={
//         labels: releasedate,
//         datasets: [
//           {
//             label: 'Count of Movies',
//             data:moviesyear,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//             options: {
               
                
                
                
//             }
            
//           },
//         ],
//     }
//     useEffect(()=>{
//         const lable=[]
//         const counts = {};
//         let moviecount=[]
//         axios.get("http://localhost:8282/user/getMovies").then((res)=>{
//         setmovies(res.data)
//           res.data.forEach(element => {
          
//             const language = element.language;
//             counts[language] = counts[language] ? counts[language] + 1 : 1;
//           });
//        const values=Object.entries(counts)
//  values.forEach(([key,value])=>{
// lable.push(key)
//     moviecount.push(value)
//  })
//  setlanguages(lable)
//  setcountmovies(moviecount)
//         })

//         // bar chart
// let barlable=[]
// let barmoviecount=[]
//         const yearcounts = {};
//         console.log(movies)
//       movies.forEach(element => {
        
//           const year = element.releaseDate
//           yearcounts[year] = yearcounts[year] ? yearcounts[year] + 1 : 1;
//         });
//         console.log(yearcounts)
//      const entries=Object.entries(yearcounts)
// entries.forEach(([key,value])=>{
// barlable.push(key)
//   barmoviecount.push(value)
// })
// setreleasedate(barlable)
// setmoviesyear(barmoviecount)
    
        
//     },[])

//   return (
//     <div>
//         <div className='pie-chart' style={{width:"300px",height:"300px"}}>
        
//         <Pie data={data}
        
//          options={{
//             plugins: {
//                 legend: {
//                   display: true,
//                   position:"right",
//                   labels:{
//                     usePointStyle:true
//                   }
//                 }},
//                 responsive: true,
//                 maintainAspectRatio: false,
//         }}
//    />
//         </div>
//         <Bar data={barchartdata}/>
//         </div>
//   )
// }

// export default Dashboard