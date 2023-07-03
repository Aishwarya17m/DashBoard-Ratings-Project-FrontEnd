import React, { useContext, useEffect } from 'react'
import user from '../../images/users.png'
import rating from '../../images/ratings.png'
import movie from '../../images/movies.png'
import rated from '../../images/user_rating.png'
import { MovieContext } from '../../MovieContext';
function CardComponent(props) {
    const [movies]=useContext(MovieContext)
    
    useEffect(()=>{

    })
  return (
    <div className='total-count-view'>
           
            <div>
            <div className='total-users'>
            <div>
            <img src={user} alt="users"/>
            </div>
              <div className='users-heading'>Users Registered</div>
              <div>{props.udata.length}</div>
              </div>

            </div>
            <div className='rating-percent'>
              <div>
              <img src={rating} alt="ratings" style={{width:"45px"}}/>
              </div>
              <div>
              <div className='rating-heading'>Rating %</div>
              <div>{Math.floor((Array.from(new Set(props.allrdata.map(l=>l.movie))).length)/
              (movies.length*(Array.from(new Set(props.allrdata.map(l=>l.user.userId))).length))*100)} %</div>
            
             
              
              </div>
              </div>
              <div className='total-movies'>
              <div>
              <img src={movie} alt="movies" style={{width:"45px"}}/>
              </div>
              <div>
              <div className='movies-heading'>Total Movies</div>
              <div>{movies.length}</div>
              </div>

            </div>
            <div className='total-users-rated'>
            <div>
              <img src={rated} alt="user-rated" style={{width:"45px"}}/>
              </div>
              <div>
              <div className="rating-heading">Total Users Rated</div>
              <div>{(Array.from(new Set(props.allrdata.map(l=>l.user.userId))).length)}</div>
              </div>
              </div>
            </div>
  )
}

export default CardComponent