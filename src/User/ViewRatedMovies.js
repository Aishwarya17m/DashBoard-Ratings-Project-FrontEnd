import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewRatedMovies() {
    const {uid}=useParams()
    const [ratings,setratings]=useState([])
    useEffect(()=>{
        
        axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res=>{
            setratings(res.data)
        })

       

    },[uid])
  return (
    <div>ViewRatedMovies
         <table>
     <tbody>
                <tr>
                        <th>Movie Name</th>
                        <th>Language</th>
                        <th>Category</th>
                        <th>Release Date</th>
                        <th>Rating</th>

                        </tr>
                        {
                          ratings.map(r=>{
                                return(
                                    <tr key={r.ratingsId}>
                                    <td> {r.movie.movieName}</td>
                                        <td>{r.movie.language}</td>
                                        <td>{r.movie.category}</td>
                                    <td>{r.movie.releaseDate}</td>
                                    <td>{r.rating}</td>
                                    </tr>
                                )})}

                        </tbody>
                        </table>
    </div>
  )
}

export default ViewRatedMovies