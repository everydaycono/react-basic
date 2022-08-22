import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{background:"#222",width:"100vw",height:"100px"}} >
        <Link to="/">Home</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/slider">Slider</Link>
    </nav>
  )
}

export default Navbar