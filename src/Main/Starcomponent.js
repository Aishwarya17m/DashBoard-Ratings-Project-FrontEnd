import React from 'react'

import ReactStars from "react-rating-stars-component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'



function Starcomponent(props) {
 const starproperties={
  count:5,

  size:props.size,
  isHalf:true,
  emptyIcon:<FontAwesomeIcon icon={faStar}  className='fa-Star'/>,
   halfIcon:<FontAwesomeIcon icon={faStarHalfAlt} className='fa-halfStar' />,
  filledIcon:<FontAwesomeIcon icon={faStar} className='fa-filled'/>,
  activeColor:"#ffd700",
  onChange:e=>props.submit(e)
 }
  return (
    <div>
         <ReactStars {...starproperties} />
    </div>
  )
}

export default Starcomponent