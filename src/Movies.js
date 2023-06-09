import axios from "axios";
import React, {  memo, useEffect,  useState } from "react";
import { MovieContext } from "./MovieContext";

 function Movies({children}){
    const [movies,setmovies]=useState([]);

    useEffect(()=>{
    
            axios.get("http://localhost:8282/user/getMovies").then((res)=>{
                setmovies(res.data)

            })
        
    },[])

    return (
    
        <MovieContext.Provider value={[movies,setmovies]}>
            {children}
        </MovieContext.Provider>
    )
}
export default  memo (Movies) 