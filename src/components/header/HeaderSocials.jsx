import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/samarth-h-chinivar" target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href="https://github.com/SamarthHChinivar" target="_blank" title='GitHub'><BsGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/samarthharish321" target="_blank" title='Geeks for Geeks'><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials