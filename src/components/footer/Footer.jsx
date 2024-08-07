import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiSololearn} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SAMARTH H CHINIVAR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#language">Stats</a></li>
        {/* <li><a href="#song">Song</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/samarth-h-chinivar" target="_blank" rel="noopener noreferrer" title='Linkedin having 6K+ Followers'><BsLinkedin/></a>
        <a href="https://github.com/SamarthHChinivar" target="_blank" rel="noopener noreferrer" title='GitHub having 5k+ Views'><BsGithub/></a>
        {/* <a href="https://www.sololearn.com/profile/6093118" target="_blank" rel="noopener noreferrer" title='Sololearn'><SiSololearn/></a> */}
      </div>
      
      {/* <small>GitHub Profile Views:</small> <br/>
      <img src='https://komarev.com/ghpvc/?username=SamarthHChinivar&color=blueviolet' alt='Profile Views' className='view' /> */}

      <div className="footer__copyright">
        <small>&copy; Samarth H Chinivar.  All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer