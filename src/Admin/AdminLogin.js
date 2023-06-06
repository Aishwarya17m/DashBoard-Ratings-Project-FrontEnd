import React, {  useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
function AdminLogin() {
    const [adminEmail, setadminEmail] = useState("");
    const [adminPassword, setadminPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
       axios.get("http://localhost:8282/admin/getAdmin").then((res)=>{
          
           
           console.log(res)
           
           res.data.forEach(item=>{
            console.log(item.adminEmail)
            if(adminEmail===item.adminEmail && adminPassword===item.adminPassword){
                window.sessionStorage.setItem("adminEmail",adminEmail);
                window.location.href="/AdminHome"
            }
            else{
                alert("wrong credentials")
            }
           
           })
        })
    }
   
    return (
        <div>
           
            <div className='admin-login-container'>
                <div className='admin-login-left-container'>
                </div>
                <div className='admin-login-right-container'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Admin Email ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={adminEmail} onChange={e =>setadminEmail(e.target.value)
                             } />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Admin Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={adminPassword} onChange={e => setadminPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button onClick={handleSubmit}>Submit</Button>
                            
                       
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;