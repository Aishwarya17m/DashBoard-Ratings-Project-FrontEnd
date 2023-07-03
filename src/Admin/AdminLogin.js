import React, {  useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Main/Style/login.css'
import login2 from '../images/adminlogin.jpg'
import back from '../images/back.png'
import axios from 'axios'
import { useForm } from "react-hook-form";
function AdminLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [adminEmail, setadminEmail] = useState("");
    const [adminPassword, setadminPassword] = useState("");


    const onsubmit = () => {
 
        const data={
            adminEmail,
            adminPassword
        }
        if(adminEmail && adminPassword){

        
       axios.post("http://localhost:8282/admin/adminLogin",data).then((res)=>{
          
           
       if(res.data==="Success"){
          
          alert(res.data)
                window.sessionStorage.setItem("adminEmail",adminEmail);
                window.location.href="/AdminHome"
       }
       else {
        alert(res.data)
       }
           
           
         
        })
    }
}
   
    const loginOptions = {
    
        email: { required: "Admin Email id is required" },
        password: {
          required: "Password is required",
         
        }
      };
    return (
        <div>
            <div className='admin-login-page'>
                <img src={login2} alt="login-image1" className="adminpage-image"/>
                <img src={back} alt="back" className='backward'/>
            <div className='admin-login-container'>
               
                <div className='admin-login-left-container'>
                <img src={login2} alt="login image2"    className='admin-login-image'/>
                </div>
                <div className='admin-login-right-container'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Admin Email ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                               {...register("email",loginOptions.email)}
                            value={adminEmail} onChange={e =>setadminEmail(e.target.value)
                             } />
                             <p className="validations">
                            {errors?.email && errors.email.message}
                            </p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Admin Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                               {...register("password",loginOptions.password)}
                            value={adminPassword} onChange={e => setadminPassword(e.target.value)} />
                              <p className="validations">
                            {errors?.password && errors.password.message}
                            </p>
                        </Form.Group>
                        
                        <Button onClick={handleSubmit(onsubmit)}>Submit</Button>
                            
                       
                    </Form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminLogin;