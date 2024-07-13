import React from 'react'
import '../styles/Footer.css'
import GmailIcon from '@mui/icons-material/Email'



function Footer() {
  return (
    
         <div className="footer">
        <div className='socialmedia'>
        
        <GmailIcon />
        < a href="n.thashenu@gmail.com">Contact Us</a>
       
        <p>&copy; {new Date().getFullYear()} Yashu's Pizzeria</p>
        
        </div> 

      
    </div>
    
   
  )
}

export default Footer
