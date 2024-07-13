import React from 'react'
import contactphoto from '../assests/contact.jpg'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftside1'>
        <img src={contactphoto} />
          </div>
      <div className='rightside1'>
        <h1> Contact Us</h1>
        <form id='contactform' method='POST'>
        <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' name='name' placeholder="Enter Full Name..." required />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder="Enter Email..." required />
          <label htmlFor='message'>Message</label>
          <textarea rows={6} id='message' name='message' placeholder='Enter message' required></textarea>
          <button type='submit'>Send Message</button>

        </form>

      </div>
      
    </div>
  )
}

export default Contact
