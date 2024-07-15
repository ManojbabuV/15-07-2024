import React from 'react'
import { Link } from 'react-router-dom'
 
const Logout = () => {
    
    
  return (
    <div>
        <h3>Are you sure want to leave this page</h3>
        <Link to='login'>Goto Login</Link>
    </div>
  )
}

export default Logout;