
import React, {  useContext} from 'react'
import { MovieContext } from '../MovieContext'
function DisplayMovies() {
   
    const [movies]=useContext(MovieContext)
   
  return (
    <div>DisplayMovies
        <table border="2">
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
                    <td >{m.movieName}</td>
                    <td >{m.language}</td>
                    <td >{m.category}</td>
                    <td >{m.releaseDate}</td>
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