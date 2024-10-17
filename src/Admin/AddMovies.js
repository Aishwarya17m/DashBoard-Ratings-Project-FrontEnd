import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddMovies() {
    const [movieName,setmovieName]=useState("")
    const [language,setlanguage]=useState("")
    const [category,setcategory]=useState("")
    const [releasedate,setreleasedate]=useState("")
    const handleSubmit=()=>{
      if(movieName.length===0 || language.length===0 || category.length===0 || releasedate.length===0){
        alert("enter all movie details")
      }
      else{
      const data={
     movieName,
     language,
     category,
     releaseDate:releasedate
      }
      if(movieName && language && category && releasedate){
      axios.post("http://localhost:8282/admin/addMovie",data).then((res)=>{
        console.log("movie added")
       
      })
    
      
    }
  }
  }
  return (
    <div>
         <Form onSubmit={handleSubmit} id="addmovie-form">
                        <Form.Group className="mb-3" >
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie Name" id="movieName"
                            value={movieName}
                            onChange={e=>setmovieName(e.target.value)} />
                            <Form.Text className="text-muted">
                              
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Language</Form.Label>
                            <Form.Control type="text" placeholder="Enter language"  id="movieLanguage" value={language}
                            onChange={e=>setlanguage(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" id="movieCategory"  value={category}
                            onChange={e=>setcategory(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter release date" id="releaseDate" value={releasedate}
                            onChange={e=>setreleasedate(e.target.value)}/>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit" style={{background:"#db546e",border:"0"}}>
                            Submit
                        </Button>
                    </Form>
    </div>
  )
}

export default AddMovies