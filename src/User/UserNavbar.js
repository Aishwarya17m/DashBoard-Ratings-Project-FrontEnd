import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function UserNavbar() {
   
const email=window.sessionStorage.getItem("UserEmail")
   
const logout=()=>{
     window.sessionStorage.removeItem('UserEmail')
}
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container className='main-container'>
      <Navbar.Brand href="/">User Home</Navbar.Brand>
      <Nav className="me-auto">
      
        <Nav.Link className="username" >{email.split("@")[0]}</Nav.Link>
          
        <Nav.Link href="/" onClick={logout}>Log Out</Nav.Link>
     
      
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default UserNavbar