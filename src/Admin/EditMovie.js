import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import './Styles/EditMovies.css'
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
        <div className='edit-movies'>
        
        <h4>Edit Movie Details</h4>

      
        
                <div  className='edit-movies-form'>
                    
                       
                    <div className='Edit-movieName'> <label>Movie Name:</label>
                    <EditText
            
value={movieDetails.movieName}
          name="movie name"
     id="movieName-textbox"
         onChange={e=>setmovieDetails({...movieDetails, movieName:e.target.value})}
     
          type="text"
         
         inline 
        
          
         
        />
        </div> 
        <div className='Edit-language' ><label>Language:</label>
          <EditText
         value={movieDetails.language}
         inline 
         id="language-textbox"
        
          type="text"
          onChange={e=>setmovieDetails({...movieDetails, language:e.target.value})}
         
        />
        </div> 
        <div className='Edit-category'><label>Category:</label>
          <EditText
           value={movieDetails.category}
           inline 
           id="category-textbox"
       
          type="text"
          onChange={e=>setmovieDetails({...movieDetails, category:e.target.value})}
          
         
        />
        
        </div>
        <div className='Edit-releaseDate'> <label>Release Date:</label>
          <EditText
           value={movieDetails.releaseDate}
           onChange={e=>setmovieDetails({...movieDetails, releaseDate:e.target.value})}
          type="date"
          id="releaseDate-textbox"
          inline 
       
          
         
        />
        </div> 
    
        <button onClick={handleSubmit}>Submit</button>
        </div>

                   
           
        
        </div>
        </div>
  )
}

export default EditMovie