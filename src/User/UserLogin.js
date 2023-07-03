import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Main/Style/login.css'
import login from '../images/userlogin.jpg'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
function UserLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [userEmail,setuserEmail]=useState("")
  const [userPassword,setuserPassword]=useState("")

  const onSubmit=(e)=>{

    const data={
      userEmail,
      password:userPassword
    }
axios.post("http://localhost:8282/user/userLogin",data).then(res=>{
 if(res.data.split(",")[1]==="login done"){
    
      alert("login done")
      window.sessionStorage.setItem("UserEmail",userEmail);
     
      window.location.href=`/UserHome/${res.data.split(",")[0]}`
      
 }
    else if(res.data==="invalid login"){
      alert(res.data)
    }
    else if(res.data==="user not registered"){
      alert(res.data)
    }

    
  }
)
  
  }
  const loginOptions = {
    
    email: { required: "Email id is required" },
    password: {
      required: "Password is required",
     
    }
  };
 
  return (
    <div>
    <div className='user-login-page'>
      <img src={login} alt="login-image1" className="userpage-image"/>
       <div className='user-login-container'>
        
                <div className='user-login-left-container'>
                <img src={login} alt="login image2"    className='user-login-image'/>
                </div>
                <div className='user-login-right-container'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                              {...register("email",loginOptions.email)}
                                 value={userEmail} className='input-useremail' onChange={e =>setuserEmail(e.target.value)
                             } />
                            <p className="validations">
                            {errors?.email && errors.email.message}
                            </p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                              {...register("password",loginOptions.password)}
                            value={userPassword} onChange={e => setuserPassword(e.target.value)} />
                             <p className="validations">
                            {errors?.password && errors.password.message}
                            </p>
                        </Form.Group>
                     
                        <Button  onClick={handleSubmit(onSubmit)} style={{background:"#b20c0c"}  } >Submit</Button>
                        <p className='not-registered'>Not registered yet? <Link to="/UserReg">Sign Up </Link> here</p>
                            
                       
                    </Form>
                   
                </div>
               
           
            
                
            </div>
    </div>
    </div>
  )
}

export default UserLogin