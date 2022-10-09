import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserCheck} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {MdContacts} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => {setActiveNav('#')}} className={activeNav==='#' ? 'active':''} title='Home'><ImHome/></a>
      <a href="#about" onClick={() => {setActiveNav('#about')}} className={activeNav==='#about' ? 'active':''} title='About'><FaUserCheck/></a>
      <a href="#experience" onClick={() => {setActiveNav('#experience')}} className={activeNav==='#experience' ? 'active':''} title='Experience'><BiBookBookmark/></a>
      <a href="#portfolio" onClick={() => {setActiveNav('#portfolio')}} className={activeNav==='#portfolio' ? 'active':''} title='Portfolio'><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav==='#contact' ? 'active':''} title='Contact'><MdContacts/></a>
    </nav>
  )
}

export default Nav