import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function UserNavbar() {
const logout=()=>{
     window.sessionStorage.clear();
}
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container className='main-container'>
      <Navbar.Brand href="/">User Home</Navbar.Brand>
      <Nav className="me-auto">
        
        <Nav.Link href="/" onClick={logout}>Log Out</Nav.Link>
     
      
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default UserNavbar