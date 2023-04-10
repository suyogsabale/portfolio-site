import React from 'react'
import './experience.css'
import {GoVerified} from 'react-icons/go'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have..</h5>
      <h2>My Experience</h2>
        
        
        <div className="container experience__container">
            <div className="experience___frontend">
                <h3>FRONTEND DEVELOPEMENT</h3>
               <div className="experience__content">

                <article className='experience__details'>
                  <GoVerified className='experience__details-icon' />
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>


                <div className="experience__content">
                <article className='experience__details'>
                  <GoVerified className='experience__details-icon' />
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                </div>

                <div className="experience__content">
                
                  <article className='experience__details'>
                  <GoVerified className='experience__details-icon' />
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                  </div> 
                  </article>
                </div>


                <div className="experience__content">
                <article className='experience__details'>
                  <GoVerified className='experience__details-icon' />
                  <div>
                    <h4>BootsTrap</h4>
                    <small className='text-light'>Experienced</small>
                  </div>

                 </article>
                </div>

                <div className="experience__content">
                <article className='experience__details'>

                  <GoVerified className='experience__details-icon' />
                  <div>
                      <h4>React</h4>
                      <small className='text-light'>Intermediate</small>
                  </div>
                  </article>
                </div>
                
                </div>
            </div>

            <div className="experience__backend">
            <h3>BACKEND DEVELOPEMENT</h3>
                
                <div className="experience__content">

                
                <article className='experience__details'>
                  <GoVerified className='experience__details-icon' />
                  <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>


                <article className='experience__details'>
                  <GoVerified className='experience__details-icon' />
                  <div>

                    <h4>MongoDB</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience__details'>

                  <GoVerified className='experience__details-icon' />
                  <div>

                    <h4>PHP</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>

                  <GoVerified className='experience__details-icon' />
                  <div>

                      <h4>MySQL</h4>
                      <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>

                  <GoVerified className='experience__details-icon' />
                  <div>

                      <h4>Python</h4>
                      <small className='text-light'>Intermediate</small>
                  </div>
                </article>
              </div>
            </div>

        </div>
    </section>
  )
}

export default Experience