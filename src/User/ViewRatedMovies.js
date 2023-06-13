import axios from 'axios'
import React, { useEffect, useState,useRef ,useCallback} from 'react'
import { useParams } from 'react-router-dom';
import deleterating from '../images/deleterating.png'
import editrating from '../images/editrating.png'
import cancelrating from '../images/cancel.png'
import updaterating from '../images/accept.png'
import './Style/Addratings.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ViewRatedMovies() {
    const {uid}=useParams()
    const [ratings,setratings]=useState([])
    const [showedit,setshowedit]=useState(false);
    const [showclicked,setshowclicked]=useState("");
    const [updateRating,setupdateRating]=useState("")
    const run=useRef(false)

    const fetchdata=useCallback( ()=>{
     
        
        axios.get(`http://localhost:8282/user/getRatedMovies/${uid}`).then(res=>{
            setratings(res.data)
        })

       

    },[uid])

    const deleteRating=(rid)=>{
      axios.delete(`http://localhost:8282/user/deleteRating/${rid}`).then(res=>{
        alert(res.data)
        fetchdata();
        
      })

    }
    const editRating=(rid)=>{
      
      

     
      if(updateRating.length===0){
        alert("invalid rating")
      }
      else{
        const data={
          rating:updateRating
  
  
        }
       
      axios.put(`http://localhost:8282/user/updateRating/${rid}`,data).then(res=>{
        alert(res.data)
        fetchdata();
        
      })
    }
      
      const timer = setTimeout(() => {
        setshowedit(false)
      }, 2000);
      return () => clearTimeout(timer);

    }
const clickhappens=(rid)=>{
  setshowclicked(rid)
  setshowedit(true)


}
    useEffect(()=>{
      if(!run.current){   
          fetchdata();
       
       run.current=true
     }
  },[fetchdata])
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
                          ratings.map((r,i)=>{
                                return(
                                    <tr key={r.ratingsId}>
                                    <td> {r.movie.movieName}</td>
                                        <td>{r.movie.language}</td>
                                        <td>{r.movie.category}</td>
                                    <td>{r.movie.releaseDate}</td>
                                    <td>{r.rating}</td>
                                    
                                    {
                                    showclicked===r.ratingsId && showedit ?
                                   
                                    <>
                                    <td className='update-ratings'>
                                      <Stack spacing={1}>
                                      <Rating name="half-rating" defaultValue={0} precision={0.5} value={r.updateRating} onChange={e=>setupdateRating(e.target.value)} />
                                   
                                      </Stack></td>
                                  <td><img  src={updaterating} alt="accept" className='img-accept' onClick={()=>editRating(r.ratingsId)}/></td>
                                    <td><img  src ={cancelrating} alt="cancel" className='img-cancel' onClick={()=>setshowedit(false)}/></td>
                                   
                                    </>
                                    :
                                    <>
                                    <td><img  src={editrating}  alt="edit" onClick={()=>clickhappens(r.ratingsId)}/>
                                    <img  src={deleterating} style={{width:"35px"}} alt="delete" onClick={()=>deleteRating(r.ratingsId)}/></td>
                                     </>
                                    
                                    
                                    }
                                   
                                   
                                    </tr>
                                )})}

                        </tbody>
                        </table>
    </div>
  )
}

export default ViewRatedMovies