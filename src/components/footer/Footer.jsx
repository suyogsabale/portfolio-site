import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {SlSocialTwitter} from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>𝔖𝔲𝕪𝔬𝔤  𝔖𝔞𝔟𝔞𝔩𝔢</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://github.com/suyogsabale" target='_blank'><BsGithub /></a>
        <a href="https://www.linkedin.com/in/suyog-sabale" target='_blank'> <BsLinkedin /></a>
        <a href="https://www.instagram.com/suyog_sabale/?hl=en" target='_blank'><FaInstagram /></a>
        <a href="https://twitter.com/suyogsabale1" target='_blank'><SlSocialTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 𝔖𝔲𝕪𝔬𝔤  𝔖𝔞𝔟𝔞𝔩𝔢. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer
