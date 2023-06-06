import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UserLogin() {
  const [userEmail,setuserEmail]=useState("")
  const [userPassword,setuserPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
axios.get("http://localhost:8282/admin/getallusers").then(res=>{
  res.data.forEach(u => {
    if(u.userEmail===userEmail && u.password===userPassword){
      alert("login done")
      window.location.href=`/UserHome/${u.userId}`
      
    }
  });
})
  
  }

  const userregistration=()=>{
    window.location.href="/UserReg"
  }
  return (
    <div>
       <div className='admin-login-container'>
        
                <div className='admin-login-left-container'>
                </div>
                <div className='admin-login-right-container'>
                    <Form >
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
                <Button onClick={userregistration}>Signup</Button>
            </div>
    </div>
  )
}

export default UserLogin