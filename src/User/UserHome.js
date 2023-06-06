import React from 'react'
import UserNavbar from './UserNavbar'

import DisplayMovies from './DisplayMovies'
import ViewRatedMovies from './ViewRatedMovies'

function UserHome() {
    
  return (
    <div>
      <UserNavbar/>
      <div className='admin-main-container'>
          <div className='admin-sidebar'>
          <button >Add ratings</button><br/>
          <button >View Rated Movies</button><br/>
         
            

          </div>
          <div className='admin-container'>
           <DisplayMovies/>
           <ViewRatedMovies/>
  
          </div>

        </div>
    </div>
  )
}

export default UserHome