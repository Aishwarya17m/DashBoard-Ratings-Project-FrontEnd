import React from 'react'

function HomePage() {
    const adminpage=()=>{
window.location.href="/AdminHome";
    }

    const userpage=()=>{
        window.location.href="/UserHome";
            }
  return (
    <div>
        <button onClick={adminpage}>Admin Login</button>
        <button onClick={userpage}>User Login</button>
    
    </div>
  )
}

export default HomePage