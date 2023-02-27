import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Samarth Portfolio Website',
    github: 'https://github.com/SamarthHChinivar/portfolio-website' 
  } ,

  {
    id: 2,
    image: IMG2,
    title: 'SVIT Placement Training',
    github: 'https://github.com/SamarthHChinivar/svit-training-1' 
  } ,

  {
    id: 3,
    image: IMG3,
    title: 'Dubai Real Estate Web App',
    github: 'https://github.com/SamarthHChinivar/real-estate-next-js' 
  } ,

  {
    id: 4,
    image: IMG4,
    title: 'Todo List using React.js',
    github: 'https://github.com/SamarthHChinivar/todo-react' 
  } ,

  {
    id: 5,
    image: IMG5,
    title: 'Stock Trend Prediction',
    github: 'https://github.com/SamarthHChinivar/stock-python' 
  } ,

  {
    id: 6,
    image: IMG6,
    title: 'Simple Counter using React.js',
    github: 'https://github.com/SamarthHChinivar/counter-react' 
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
                  <br/>
                </div>
                <h3>{title}</h3>
                <br/>
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