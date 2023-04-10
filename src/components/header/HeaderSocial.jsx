import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{BsTwitter} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
   <div className="header_social">
        <a href="https://linkedin.com/in/suyog-sabale" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/suyogsabale" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/suyogsabale1" target="_blank"><BsTwitter/></a>
        <a href="https://www.instagram.com/suyog_sabale/" target="_blank"><BsInstagram/></a>

   </div>
  )
}

export default HeaderSocial
