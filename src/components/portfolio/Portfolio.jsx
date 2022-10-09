import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/SamarthHChinivar/portfolio-website' 
  } ,

  {
    id: 2,
    image: IMG2,
    title: 'Todo List using React-JS',
    github: 'https://github.com/SamarthHChinivar/todo-react' 
  } ,

  {
    id: 3,
    image: IMG3,
    title: 'SVIT Placement Training',
    github: 'https://github.com/SamarthHChinivar/svit-training-1' 
  } ,

  {
    id: 4,
    image: IMG4,
    title: 'Hacker Rank Java Bootcamp',
    github: 'https://github.com/SamarthHChinivar/java-4day-Hackerrank-Bootcamp' 
  } ,

  {
    id: 5,
    image: IMG5,
    title: 'HTML Basics',
    github: 'https://github.com/SamarthHChinivar/html-basic' 
  } ,

  {
    id: 6,
    image: IMG6,
    title: 'C++',
    github: 'https://github.com/SamarthHChinivar/cpp' 
  } ,
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio