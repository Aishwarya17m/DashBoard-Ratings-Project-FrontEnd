import React from 'react'

import './Style/main.css'
import { Link } from 'react-router-dom';
import movie from '../images/movie_rating.png'
function MainNavbar() {
  return (
    <div>
     
        <div className='main-navbar'>
          <div className='main-navbar-left'>
            <img src={movie} alt="movie_rating" className='movie-rating'/>
            Movie Rating</div>
          <div className="main-navbar-right">
            <Link to="/Adminlogin" className='admin-login'>Admin Login</Link>
            <Link to="/Userlogin" className="user-login">User Login</Link>
          
          </div>
        </div>
     
    </div>
  )
}

export default MainNavbar;