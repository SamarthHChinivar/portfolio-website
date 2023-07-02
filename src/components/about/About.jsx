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
              <h5><legend>Sai Vidya Institute of Technology</legend></h5>
              <small>8.45 CGPA</small>
            </article>

            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5><legend>Kendriya Vidyalaya R.W.F</legend></h5>
              <small>80.6 %</small>
            </article>
          </div>

          <p>Hello, I am <strong>Samarth H. Chinivar</strong>, a <strong>Software Developer</strong> based in Bengaluru, India. As a <strong>fresh graduate</strong> with a strong foundation in computer science, I possess excellent problem-solving and troubleshooting skills. My expertise lies in web technologies, including HTML, and CSS frameworks like Tailwind CSS and Bootstrap, as well as modern frameworks like <strong>React.js</strong> and <strong>Next.js</strong>. I have a knack for quickly adapting to new technologies and have practical experience in <strong>JavaScript</strong>, <strong>Java</strong> <strong>C</strong>, and <strong>Python</strong> programming languages. I am committed to delivering clean and reusable code. I am currently seeking an opportunity to apply my skills and contribute to the growth of an organization, making a <strong>positive impact</strong> along the way.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About