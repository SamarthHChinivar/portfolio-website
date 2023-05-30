import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserCheck} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {SiSemanticuireact} from 'react-icons/si'
import {MdContacts} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => {setActiveNav('#')}} className={activeNav==='#' ? 'active':''} title='Home'><ImHome/></a>
      <a href="#about" onClick={() => {setActiveNav('#about')}} className={activeNav==='#about' ? 'active':''} title='About'><FaUserCheck/></a>
      <a href="#projects" onClick={() => {setActiveNav('#projects')}} className={activeNav==='#projects' ? 'active':''} title='Projects'><AiOutlineFundProjectionScreen/></a>
      <a href="#skills" onClick={() => {setActiveNav('#skills')}} className={activeNav==='#skills' ? 'active':''} title='Skills'><SiSemanticuireact/></a>
      <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav==='#contact' ? 'active':''} title='Contact'><MdContacts/></a>
    </nav>
  )
}

export default Nav