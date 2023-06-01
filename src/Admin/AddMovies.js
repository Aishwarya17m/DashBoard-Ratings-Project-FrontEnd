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
      const data={
     movieName,
     language,
     category,
     releaseDate:releasedate
      }
      
      axios.post("http://localhost:8282/admin/addMovie",data).then((res)=>{
        console.log("movie added")
       
      })
    }
  return (
    <div>
         <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie Name" 
                            value={movieName}
                            onChange={e=>setmovieName(e.target.value)} />
                            <Form.Text className="text-muted">
                              
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Language</Form.Label>
                            <Form.Control type="text" placeholder="Enter language"  value={language}
                            onChange={e=>setlanguage(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category"  value={category}
                            onChange={e=>setcategory(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter release date"  value={releasedate}
                            onChange={e=>setreleasedate(e.target.value)}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
    </div>
  )
}

export default AddMovies