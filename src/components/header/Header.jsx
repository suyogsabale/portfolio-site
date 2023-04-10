import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me3.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>𝔖𝔲𝕪𝔬𝔤  𝔖𝔞𝔟𝔞𝔩𝔢</h1>
        <h5 className="text-light">FullStack Developer</h5>
        
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
