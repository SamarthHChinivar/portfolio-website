import React from 'react';
import './experience.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Get To Know</h5>
      <h2>My Experience</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="experience__container"
          contentStyle={{ background: '#2c2c6c', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #2c2c6c' }}
          date="2019 - Present"
          iconStyle={{ background: '#2c2c6c', color: '#fff' }}
          icon={<i className="fas fa-briefcase"></i>}
        >
          <h3 className="experience__container-title">Job Title</h3>
          <h4 className="experience__container-subtitle">Company Name</h4>
          <p className="experience__container-description">
            Description of the job
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="experience__container"
          contentStyle={{ background: '#2c2c6c', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #2c2c6c' }}
          date="2017 - 2019"
          iconStyle={{ background: '#2c2c6c', color: '#fff' }}
          icon={<i className="fas fa-briefcase"></i>}
        >
          <h3 className="experience__container-title">Job Title</h3>
          <h4 className="experience__container-subtitle">Company Name</h4>
          <p className="experience__container-description">
            Description of the job
          </p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </section>
  );
};

export default Experience;