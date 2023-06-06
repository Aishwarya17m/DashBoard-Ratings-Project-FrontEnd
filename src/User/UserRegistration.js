import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UserRegistration() {
    const [username,setusername]=useState("")
    const [userEmail,setuserEmail]=useState("")
    const [userPassword,setuserPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            userName:username,
            userEmail,
            password:userPassword
        }
        axios.post("http://localhost:8282/user/addUser",data).then(res=>{
            window.location.href="/Userlogin"
            alert("registered!")
        })
    }
  return (
    <div>
        <div className='admin-login-container'>
        
    <div className='admin-login-left-container'>
    </div>
    <div className='admin-login-right-container'>
        <Form >
        <Form.Group className="mb-3" >
                <Form.Label>User name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={username} onChange={e =>setusername(e.target.value)
                 } />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User email ID</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={e =>setuserEmail(e.target.value)
                 } />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>User Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={userPassword} onChange={e => setuserPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={handleSubmit}>Submit</Button>
                
           
        </Form>
    </div>
    <br/>
   
</div>
</div>
  )
}

export default UserRegistration