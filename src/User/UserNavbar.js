import React from 'react'
import { Link } from 'react-router-dom';

function UserNavbar() {
   
const email=window.sessionStorage.getItem("UserEmail")
   
const logout=()=>{
     window.sessionStorage.removeItem('UserEmail')
}
  return (
    <div>
         <div className='main-navbar'>
          <div className='main-navbar-left'>
            {/* <img src="" alt="movie_rating" className='movie-rating'/> */}
            Movie Rating</div>
          <div className="main-navbar-right">
            
            <Link  className='admin-login'>{email.split('@')[0].toLocaleUpperCase()}</Link>
            <Link to="/" className="user-login"  onClick={logout}>Log Out</Link>
          
          </div>
        </div>
       </div>
  )
}

export default UserNavbar