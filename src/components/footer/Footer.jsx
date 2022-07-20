import React from 'react'
import './footer.css'
import { GrFacebookOption } from 'react-icons/gr'
import { GrLinkedinOption } from 'react-icons/gr'

function Footer() {
  return (
   <footer >
    <a href="#" className='footer__logo'>Stefano Brunialti</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
     
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      

    </ul>  

    <div className="footer__socials">
      <a href="https://linkedin.com"><GrLinkedinOption/></a>
      <a href="https://facebook.com">
        <GrFacebookOption />
      </a>

    </div>

    <div className="footer_copyright">
      <p>&copy; 2022 Stefano Brunialti</p>
    </div>
   </footer>
  )
}

export default Footer