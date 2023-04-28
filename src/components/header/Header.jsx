import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1><span>Samarth H Chinivar</span></h1>
        <h5 className="text-light">Tech-Enthusiast</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="samarth" title='Samarth' loading='lazy'/>
        </div>

        <a href="#projects" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
