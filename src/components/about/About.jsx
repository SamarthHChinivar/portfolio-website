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
            <img src={ME} alt="samarth" title='Samarth' loading='lazy'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>Hello, my name is <span>Samarth H Chinivar</span> and I am based in Bengaluru, India. With a strong foundation in computer science, I have honed my problem-solving and troubleshooting skills while gaining expertise in web technologies such as JavaScript, HTML, and CSS frameworks including Tailwind CSS and Bootstrap, as well as modern frameworks such as React.js and Next.js. My passion lies in creating efficient and user-friendly interfaces with a focus on performance optimization and usability. I am actively seeking an opportunity to contribute my skills to an organization's growth and make a positive impact.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
