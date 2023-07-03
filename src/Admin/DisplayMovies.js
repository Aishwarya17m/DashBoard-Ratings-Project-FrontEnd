import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext'
import { Link } from 'react-router-dom'
import edit from '../images/editrating.png'
function DisplayMovies() {

  const [movies] = useContext(MovieContext)

  return (
    <div>
      <h3>Movie List</h3>


      <div className='movie-container'>



        {

          movies.map((m, i) => {
            return (
              <div key={m.movieId} className='movie-name-container'>

                <div><Link to={`/movieDetails/${m.movieId}`}> {m.movieName} </Link></div>
                <span>({m.language})</span>
                <div>{m.category}</div>

                <div>

                </div>




              </div>





            )
          })
        }

      </div>
    </div>
  )
}

export default DisplayMovies