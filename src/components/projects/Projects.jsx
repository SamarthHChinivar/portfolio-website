import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'iPhone 14 Pro Landing Page',
    github: 'https://github.com/SamarthHChinivar/iPhone-14-Pro-Landing-Page',
    demo: 'https://i-phone-14-pro-landing-page.vercel.app',
    desc:'Website similar to Apple iPhone 14’s landing page which is built using React.js, WebGi, Three.js, GSAP ScrollTrigger.'
  },

  {
    id: 2,
    image: IMG2,
    title: '3D Shirt Designer App',
    github: 'https://github.com/SamarthHChinivar/3d-shirt-designer',
    demo: 'https://3d-shirt-designer-azure.vercel.app',
    desc:'Design your shirts by changing colour, logo, texture of the shirt in this amazing 3D Shirt Designer website.'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Samarth Portfolio Website',
    github: 'https://github.com/SamarthHChinivar/portfolio-website',
    demo: 'http://samarth-portfolio-website.000webhostapp.com',
    desc: 'Personal Portfolio website using React.js, HTML5, and CSS3 to showcase skills, projects, and social media links.'
  } ,

  {
    id: 4,
    image: IMG4,
    title: 'Exotic Gallery',
    github: 'https://github.com/SamarthHChinivar/exotic-gallery',
    demo: 'https://exotic-gallery.vercel.app',
    desc: 'Exotic Gallery is a template website for sharing stock photos, which was built using Next.js, React.js, Tailwind CSS and Supabase.' 
  } ,

  {
    id: 5,
    image: IMG5,
    title: 'NFTs App',
    github: 'https://github.com/SamarthHChinivar/NFT-RN-App',
    demo: 'https://github.com/SamarthHChinivar/NFT-RN-App/releases/tag/v1.0.2',
    desc: 'NFTs App is built using React Native, which has two main screens: the home screen and the details screen.' 
  } ,

  {
    id: 6,
    image: IMG6,
    title: 'Dubai Real Estate Web App',
    github: 'https://github.com/SamarthHChinivar/real-estate-next-js',
    demo: 'https://samarth-estates.vercel.app', 
    desc: 'Fully Functional Real Estate web application using Next.js, React.js, and Chakra-UI for listing Dubai properties for rent and sale.'
  } ,

]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recently Developed</h5>
      <h2>Projects</h2>

      <div className="container container__portfolio">
        {
          data.map(({id, image, title, github, demo, desc}) => {
            return (
              <article key={id} className="portfolio__item">
                
                <div className="portfolio__item-image">
                  {/*image size must be standard for all files */}
                  <img src={image} alt={title} loading='lazy' height={180} width={900} />
                  <br/>
                </div>
                
                <h3>{title}</h3>
                <br/>
                
                <div className="portfolio__item-cta">
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer' >Live Demo</a>
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer' >Github</a>
                </div>
                <br/>

                <p>{desc}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects