import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio-1',
    github: 'https://github.com/SamarthHChinivar' 
  } ,

  {
    id: 2,
    image: IMG2,
    title: 'Portfolio-2',
    github: 'https://github.com/SamarthHChinivar' 
  } ,

  {
    id: 3,
    image: IMG3,
    title: 'Portfolio-3',
    github: 'https://github.com/SamarthHChinivar' 
  } ,

  {
    id: 4,
    image: IMG4,
    title: 'Portfolio-4',
    github: 'https://github.com/SamarthHChinivar' 
  } ,

  {
    id: 5,
    image: IMG5,
    title: 'Portfolio-5',
    github: 'https://github.com/SamarthHChinivar' 
  } ,

  {
    id: 6,
    image: IMG6,
    title: 'Portfolio-6',
    github: 'https://github.com/SamarthHChinivar' 
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