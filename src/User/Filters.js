import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faArrowUp} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Filters({changehandler,optionhandler,searchdata}) { 
 
  const [open,setopen]=useState(false)

    const [languages,setlanguages]=useState([])
 

   
    useEffect(()=>{

        axios.get("http://localhost:8282/user/getAllLanguages").then((res)=>{
            setlanguages(res.data)

        })
        
    
    },[])

    

  return (
    <div >
      <div>
        <h6 >Filters <FontAwesomeIcon icon={faArrowDown} style={{display:open===true?"none":""}} onClick={()=>setopen(true)}/>
      <FontAwesomeIcon icon={faArrowUp} style={{display:open===false?"none":""}} onClick={()=>setopen(false)}/></h6>
     {
     open &&
     <div className='filter-container'> 
     <input type="text" placeholder='search by movie name'
       value={searchdata} onChange={changehandler} className='filter-searchdata' />
      
       <select name="languages" onChange={optionhandler} className='select-filter' >
        <option value="none"> All Languages </option>
       {
        languages.map((item,i)=>{
          return(
          <React.Fragment key={i}>
        <option value={item} key={i}>{item}</option>
      </React.Fragment>
      
       
          )

        })
       }
       </select>
      
    
       
    
</div>
}
</div>
  

   
    </div>
  )
}

export default Filters