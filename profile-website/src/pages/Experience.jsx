import React from 'react'
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, volunteering } from '../constants/constants_index';

const Experience = () => {
  return (
    <section className="max-container">
      <h1 className='subhead-text'>Volunteering</h1>
      <br/>
      <div>
        <p>
          Having grown up in Vancouver, I have been exposed to the appeal and significance of volunteering from an early age.
          Here, I will share a summary of my volunteering experiences in descending order of recency:
        </p>
      </div>
      
      <div className="mt-12 flex">
        <VerticalTimeline>
          {volunteering.map((volunteer) => (
            // eslint-disable-next-line react/jsx-key
            <VerticalTimelineElement>
            <div>
              <h3 className="text-black text-xl font-poppins font-semibold">
                {volunteer.company_name}
              </h3>
            </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
      <br/>
      <h1 className='subhead-text'>Work Experience</h1>
      <br/>
      <div>
        <p>
          Having grown up in Vancouver, I have been exposed to the appeal and significance of volunteering from an early age.
          Here, I will share a summary of my volunteering experiences:
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            // eslint-disable-next-line react/jsx-key
            <VerticalTimelineElement>
            <div>
              <h3 className="text-black text-xl font-poppins font-semibold">
                {experience.title}
              </h3>
            </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>

    </section>
  )
}

export default Experience