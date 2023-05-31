import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm </h3>
        <h1><span>Samarth H Chinivar</span></h1>
        <h3 className="text-light">Software Developer</h3>
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
