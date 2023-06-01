import React from "react";
import { Chrono } from "react-chrono";
import './experience.css';

const Experience = () => {
  const items = [
    {
      title: 'Varcons Technologies Pvt Ltd',
      cardTitle: "Full Stack Web Intern (03/2023-04/2023)",
      url: "https://exotic-gallery.vercel.app",
      cardSubtitle: "As a Full Stack Web Intern at Varcons Technologies Pvt. Ltd., I gained hands-on experience in HTML, CSS, JavaScript, React.js, and Node.js. The internship involved designing and developing a template website for sharing stock photos using Next.js, React.js, Tailwind CSS, and Supabase, which allowed me to build skills in full-stack web development, including designing user interfaces, implementing complex features, and integrating databases."
    },
    {
      title: "Redtron Education Service LLP",
      cardTitle: "Python Intern (07/2022-08/2022)",
      url: "https://samarth-redtron.vercel.app",
      cardSubtitle: "During my time as a Python Data Science and Machine Learning Intern at Redtron Education Service LLP. I was able to gain a strong foundation in Python programming and apply my skills to various projects. One such project involved web scraping websites such as IMDb to extract relevant data for analysis. I also worked on developing a model for enhanced searching and a content generator for generating new content."
    }
  ];

  return (
    <section id="experience">
      <h5>Get To Know</h5>
      <h2>My Experience</h2>

      <div className="experience__timeline">
        <Chrono
          items={items}
          mode="HORIZONTAL"
          scrollable={{ scrollbar: true }}
          useReadMore={false}
          // itemWidth={300}
          cardHeight = {200}
          hideControls={true}
          className="my-timeline"
          
          theme={{
            primary: 'rgba(77,181,255,0.4)',
            secondary: '#2c2c6c',
            cardBgColor: '#ffffff',
            titleColor: '#e5e5e5',
            titleColorActive: '#4db5ff',
          }}

          fontSizes={{
            cardSubtitle: '1rem',
            cardTitle: '1.5rem',
            title: '1.1rem',
          }}
          
        />
      </div>
    </section>
  );
};

export default Experience;