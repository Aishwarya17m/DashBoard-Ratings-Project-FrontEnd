import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DisplayMovies() {
    const {uid}=useParams();
    const [movies,setmovies]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:8282/user/getMovies").then(res=>{
setmovies(res.data)
        })
    },[])
  return (
    <div>AddRatings
        <table>
     <tbody>
                <tr>
                        <th>Movie Name</th>
                        <th>Language</th>
                        <th>Category</th>
                        <th>Release Date</th>
                        </tr>
                    
        {

            movies.map(m=>{
                return(
                    <tr key={m.movieId}>
                       <td><Link to={`/AddRatings/${uid}/${m.movieId}`}> {m.movieName}</Link></td>
                        <td>{m.language}</td>
                        <td>{m.category}</td>
                        <td>{m.releaseDate}</td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>
    </div>
  )
}

export default DisplayMovies