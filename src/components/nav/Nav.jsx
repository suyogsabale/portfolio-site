import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {GiSecretBook} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessageCircle} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#');
  return (
  <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''} ><FaHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' :''}><FiUser/></a>
    <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><GiSecretBook/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' :''}><RiServiceLine/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircle/></a>
  </nav>
  )
}

export default Nav
