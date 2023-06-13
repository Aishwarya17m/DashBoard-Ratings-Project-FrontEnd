import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function EditMovie() {

    const {mid}=useParams();
   

    const [movieDetails, setmovieDetails] = useState({
        movieName:"",
        language:"",
        category:"",
        releaseDate:""
    });
    useEffect(()=>{
axios.get(`http://localhost:8282/user/getMovie/${mid}`).then(res=>{

setmovieDetails({
movieName:res.data.movieName,
language:res.data.language,
category:res.data.category,
releaseDate:res.data.releaseDate
})
})
    },[mid])
  
    const handleSubmit = (e) => {
        e.preventDefault()
       axios.put(`http://localhost:8282/admin/editMovie/${mid}`,movieDetails).then(res=>{
        alert(res.data)
       })
   
       window.location.href="/AdminHome"
    }
  
    
  return (
    <div>
        <AdminNavbar/>
        
     

      
        
                <div key={mid}>
                    
                       
                    <div><EditText
            
value={movieDetails.movieName}
          name="movie name"
     
         onChange={e=>setmovieDetails({...movieDetails, movieName:e.target.value})}
     
          type="text"
          
         
        />
        </div> 
        <div>
          <EditText
         value={movieDetails.language}
         
          type="text"
          onChange={e=>setmovieDetails({...movieDetails, language:e.target.value})}
         
        />
        </div> 
        <div>
          <EditText
           value={movieDetails.category}
          
          type="text"
          onChange={e=>setmovieDetails({...movieDetails, category:e.target.value})}
          
         
        />
        
        </div>
        <div> 
          <EditText
           value={movieDetails.releaseDate}
           onChange={e=>setmovieDetails({...movieDetails, releaseDate:e.target.value})}
          type="text"
          
         
        />
        </div> 
    
        <button onClick={handleSubmit}>Submit</button>
    

                   
           
        
        </div>
        </div>
  )
}

export default EditMovie