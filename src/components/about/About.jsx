import React from 'react'
import './about.css'
import ME from '../../assets/mebg22.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          
          <div className="about__me">

              <div className="about__me-img">
                <img src={ME} alt="me bg" />
              </div>
          

          </div>


          <div className="about__content">
              <div className="about__cards">

                    <article className='about__card'>
                         <FaAward className='about__icon' /> 
                         <h5>Experience</h5>      
                         <small>2+ Years Working</small>
                    </article>
{/* 
                    <article className='about__card'>
                         <FiUsers className='about__icon' /> 
                         <h5>Clients</h5>      
                         <small>99999+</small>
                    </article> */}

                    <article className='about__card'>
                         <TiFolderOpen className='about__icon' /> 
                         <h5>Projects</h5>      
                         <small>2+ Completed</small>
                    </article>

              </div>
              <br />
              <p>
                Quick learner with academic abilities and technical knowledge to succeed in different roles. Ready to expand horizons with additional knowledge and abilities gained from training and experience. Always ready to help others and use abilities to support team goals.  </p>
                <br />
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About