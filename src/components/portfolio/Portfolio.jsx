import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pf1.png'
import IMG2 from '../../assets/1_d.webp'
import IMG3 from '../../assets/spotify.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
          </div>
          <h3>Recycle It</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/suyogsabale/Recycle-It" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
          </div>
          <h3>News App</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/suyogsabale/NEWS-APP" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
          </div>
          <h3>Landing Page</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/suyogsabale/Spotify_Landing_Page" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>

        

  
      </div>
    </section>
  )
}

export default Portfolio
