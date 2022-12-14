import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAMARTH</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/samarth-h-chinivar" target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href="https://www.facebook.com/samarthh.chinivar" target="_blank" title='Facebook'><FaFacebookF/></a>
        <a href="https://github.com/SamarthHChinivar" target="_blank" title='Github'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Samarth H Chinivar. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer