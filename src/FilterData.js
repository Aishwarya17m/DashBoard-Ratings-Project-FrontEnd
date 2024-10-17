import React, { useContext, useEffect, useState } from 'react'

import { MovieContext } from './MovieContext'
import { FilterContext } from './FilterContext'
import ViewRatedMovies from './User/ViewRatedMovies'


function FilterData({children}) {
    const [movies]=useContext(MovieContext)
    const [languages,setlanguages]=useState([])
    const[langfilter,setlangfilter]=useState(false)
    const[allchecked,setallchecked]=useState([])

    useEffect(()=>{
        movies.map((ele,i)=>{
           
           setlanguages((prev)=>[...prev,ele.language])
            
        })
    },[])
  
    const changehandler=(e)=>{
        if(e.target.checked){
            setallchecked([...allchecked,e.target.value])
           
        }else{
setallchecked(allchecked.filter((item)=>item!==e.target.value))

        }
  
        
    }
 
  return (
  
    <div style={{color:"white"}}>Filters
     
        <div onClick={()=>setlangfilter(true)}> Languages </div>
            {
                langfilter && languages.filter((item,i)=>{
                   
                    return languages.indexOf(item)===i}).map((item,i)=>{
                        return(
                        <div key={i}>
                        <input type="checkbox" value={item} onChange={changehandler}/>{item}
                        
                            
                            </div>
                        )
                    })

                    
                   
                
            }
   
   <FilterContext.Provider value={[allchecked,setallchecked]}>
   {children}
   </FilterContext.Provider>
         
 
   <div>

   </div>
   
    </div>
  
  )
}

export default FilterData