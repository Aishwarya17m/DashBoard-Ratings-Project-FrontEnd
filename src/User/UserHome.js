import React, { useState } from 'react'
import UserNavbar from './UserNavbar'

import DisplayMovies from './DisplayMovies'
import ViewRatedMovies from './ViewRatedMovies'
import { Link } from 'react-router-dom'
import './Style/Userhome.css'








function UserHome() {
 
    const [viewrating,setviewrating]=useState(false)
    const [displaymovies,setdisplaymovies]=useState(true)


    const display=(e)=>{
      e.preventDefault();
      setdisplaymovies(true);
      setviewrating(false)
    }

    const ViewRating=()=>{
      setviewrating(true)
      setdisplaymovies(false)
    }

   

    

  return (
    <div>
      <UserNavbar/>
      <div className='user-main-container'>
          <div className='user-sidebar'>
            <div className='user-displayMovie'>
          <Link  onClick={display} className={'add-link-'+ (displaymovies ? 'clicked':'notclicked')}>Add ratings</Link>
          </div>
          <div className='user-view-rating'>
          <Link onClick={ViewRating} className={'view-rating-link-'+ (viewrating ? 'clicked':'notclicked')}>My Ratings </Link>
          </div>
          </div>
          <div className='user-container'>
           {
            displaymovies&& <DisplayMovies />
           }
           {
            viewrating && <ViewRatedMovies/>
           }
          </div>
        </div>
    </div>
  )
}

export default UserHome