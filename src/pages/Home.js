import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const navigate = useNavigate();
  

  return (
    <div className='home'>
      <div className='header' >
        <h1>Yashu's Pizzeria</h1>
        <p>wtfuck is this pizza</p>
        <button  onClick={(handlemenuclick)=>navigate("/MENU")} >ODER NOW</button>
      
      </div>
      
    </div>
  ) 
}

export default Home
