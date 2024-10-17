import React from 'react'
import { Link } from 'react-router-dom';

function AdminNavbar() {
 const adminemail= window.sessionStorage.getItem("adminEmail")
const logout=()=>{
     window.sessionStorage.clear();
}

  return (
    <div>
        <div className='main-navbar'>
          <div className='main-navbar-left'>
            {/* <img src="" alt="movie_rating" className='movie-rating'/> */}
            Admin Home</div>
          <div className="main-navbar-right">
            <Link  className='admin-login'>{adminemail.split('@')[0].toLocaleUpperCase()}</Link>
            <Link to="/" className="user-login"  onClick={logout}>Log Out</Link>
          
          </div>
        </div>
      </div>
  )
}

export default AdminNavbar