import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {IoSchoolSharp} from 'react-icons/io5';
import {FaSchool} from 'react-icons/fa';

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
              <IoSchoolSharp className='about__icon'/>
              <h5><span>Sai Vidya Institute of Technology</span></h5>
              <small>8.45 CGPA</small>
            </article>

            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5><span>Kendriya Vidyalaya R.W.F</span></h5>
              <small>80.6 %</small>
            </article>
          </div>

          <p>Hello, my name is <span>Samarth H Chinivar</span> and I am based in Bengaluru, India. With a strong foundation in computer science, I have honed my problem-solving and troubleshooting skills while gaining expertise in web technologies such as JavaScript, HTML, and CSS frameworks including Tailwind CSS and Bootstrap, as well as modern frameworks such as React.js and Next.js.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About