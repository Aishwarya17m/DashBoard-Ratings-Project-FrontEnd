import axios from 'axios';
import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Main/Style/login.css'
import login from '../images/userlogin.jpg'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


function UserRegistration() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    const [username, setusername] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = () => {

        const data = {
            userName: username,
            userEmail,
            password: userPassword
        }
        if (userEmail && username && userPassword) {
            axios.post("http://localhost:8282/user/addUser", data).then(res => {
                window.location.href = "/Userlogin"
                alert("registered!")
            })
        }
    }

    const signupOptions = {


        email: {
            required: "Email id is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please Enter A Valid Email!"
            }
        },
        password: {
            required: "Password is required",
            pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                message: "Invalid Password. Not matching requirements"
            }

        },
        name: { required: "Name is required" },
        confirmpassword: {
            required: "Re-enter the password",
            validate: value => {
                if (value !== password.current) {
                    return "The passwords do not match"
                }
            }
        }

    };
    return (
        <div>

            <div className='user-registration-page'>
                <img src={login} alt="login-image1" className="user-regispage-image" />

                <div className='user-registration-container'>

                    <div className='user-registration-left-container'>
                        <img src={login} alt="login image2" className='user-login-image' />
                    </div>
                    <div className='user-registration-right-container'>

                        <Form >

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name"
                                    {...register("name", signupOptions.name)}
                                    value={username} onChange={e => setusername(e.target.value)
                                    } />
                                <p className="validations">
                                    {errors?.name && errors.name.message}
                                </p>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    {...register("email", signupOptions.email)}
                                    value={userEmail} onChange={e => setuserEmail(e.target.value)
                                    } />
                                <p className="validations">
                                    {errors?.email && errors.email.message}

                                </p>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password"
                                    {...register("password", signupOptions.password)}
                                    value={userPassword} onChange={e => setuserPassword(e.target.value)} />
                                <p className="validations">
                                    {errors?.password && errors.password.message}

                                </p>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password"
                                    name="confirmpassword"

                                    {...register("confirmpassword", signupOptions.confirmpassword)}

                                    value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} />
                                <p className="validations">
                                    {errors?.confirmpassword && errors.confirmpassword.message}
                                </p>
                            </Form.Group>
                            <Button onClick={handleSubmit(onSubmit)} style={{ background: "#b20c0c" }}>Submit</Button>
                            <p className='registered'>Already Registered ? <Link to="/Userlogin">Sign In </Link> here</p>

                        </Form>
                    </div>
                    <br />

                </div>
            </div>
        </div>
    )
}

export default UserRegistration