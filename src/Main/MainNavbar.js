import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style/main.css'
function MainNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className='main-container'>
          <Navbar.Brand href="/">Movie Rating</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Adminlogin">Admin Login</Nav.Link>
            <Nav.Link href="/Userlogin">User Login</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar;