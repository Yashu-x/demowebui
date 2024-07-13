import React from 'react'
import logo from '../assests/pizzalogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function navbar() {
  
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} alt='pizzalogo'/>
        </div>
            
        <div className='rightside'>
          <Link to={"/HOME"}>HOME</Link>
          <Link to={"/MENU"}>MENU</Link>
          <Link to={"/ABOUT"}>ABOUT</Link>
          <Link to={"/CONTACT"}>CONTACT</Link>
          {/* <Link to={"/CART"}>CART</Link> */}
         
        </div>

    </div>
  )
}

export default navbar
