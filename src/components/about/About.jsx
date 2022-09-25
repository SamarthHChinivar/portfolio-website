import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="samarth" title='Samarth'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>I would like to solve various real-life problems and to explore these ever-evolving technologies. I am aiming to get an opportunity to work in an organisation where I can make the best use of my potential and contribute to the organization's growth.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
