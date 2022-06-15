import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function SideBar() {
  return (
    <nav className='side-bar'>
        <Link className="abc" style={{textDecoration:"none", color:"black"}} exact="true" to="/">Home</Link>
        <Link className="abc" style={{textDecoration:"none", color:"black"}} to="/inventory">Inventory</Link>
        <Link className="abc" style={{textDecoration:"none", color:"black"}} to="/retail">Retail Full Product</Link>
        <Link className="abc" style={{textDecoration:"none", color:"black"}} to="/availability">Keg Availability</Link>
        <Link className="abc" style={{textDecoration:"none", color:"black"}} to="/product">Product Availability</Link>
    </nav>
  )
}

export default SideBar