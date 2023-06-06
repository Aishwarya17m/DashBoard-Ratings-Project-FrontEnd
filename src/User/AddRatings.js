import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'

function AddRatings() {
    const [movies,setmovies]=useState([])
    const {mid}=useParams()
    const {uid}=useParams()
    const [rating,setrating]=useState(0)
    useEffect(()=>{
       
      axios.get(`http://localhost:8282/user/getMovie/${mid}`).then(res=>{
            setmovies([res.data])
            
                    
        })
    },[mid])

    const rateMovie=(e)=>{

        e.preventDefault();
        const data={
         
            rating
        }
        axios.post(`http://localhost:8282/user/rateMovie/${uid}/${mid}`,data).then(res=>{
            alert(res.data)
            
           
        })
    }
  return (
    <div>AddRatings
 
        <table>
     <tbody>
                <tr>
                        <th>Movie Name</th>
                        <th>Language</th>
                        <th>Category</th>
                        <th>Release Date</th>
                        <th>Rate Movie</th>
                        </tr>
                    
        {

            movies.map(m=>{
                return(
                    <tr key={m.movieId}>
                       <td> {m.movieName}</td>
                        <td>{m.language}</td>
                        <td>{m.category}</td>
                        <td>{m.releaseDate}</td>
                        <td><input type="number" placeholder='add rating out of 5' min="1" max="5" value={rating} onChange={e=>setrating(e.target.value)} ></input></td>
                        <td><button onClick={rateMovie}>Rate Movie</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>
    </div>
  )
}

export default AddRatings