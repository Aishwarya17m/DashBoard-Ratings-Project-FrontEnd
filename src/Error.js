import React from 'react'

function Error() {
   const returntoHome=()=>{
        window.location.href="/"
    }
  return (
    <div>
        <h2>Page Not found</h2>
        <h4>Return  to home </h4>
        <button onClick={returntoHome}>Home</button>


    </div>
  )
}

export default Error