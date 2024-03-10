/* eslint-disable react/no-unescaped-entities */
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
            <VerticalTimelineElement
            key={volunteer.company_name}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img 
                  src={volunteer.icon}
                  alt={volunteer.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            iconStyle={{background: volunteer.iconBg}}
            contentStyle={{
              borderBottom:'8px',
              borderStyle: 'solid',
              borderBottomColour: volunteer.iconBg,
              boxShadow: 'none'

            }}
            >
            <div>
              <h3 className="text-black text-xl font-poppins font-semibold">
                {volunteer.company_name}
              </h3>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {volunteer.points.map((point, index)=> (
                  <li key={`volunteer-point-${index}`} className='text-slate-500 font-normal pl-1 text-sm'>
                    {point}
                  </li>
                ))}
              </ul>
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

        Throughout my life, I've immersed myself in various roles to foster personal growth. These diverse experiences have instilled in me qualities of punctuality and responsibility, 
        recognizing the significance of fulfilling my duties in every role I undertake.
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            // eslint-disable-next-line react/jsx-key
            <VerticalTimelineElement
              key={experience.company_name}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              iconStyle={{background: experience.iconBg}}
              contentStyle={{
                borderBottom:'8px',
                borderStyle: 'solid',
                borderBottomColour: experience.iconBg,
                boxShadow: 'none'

              }}
            >
            <div>
              <h3 className="text-black text-xl font-poppins font-semibold">
                {experience.title}
              </h3>
              <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                {experience.company_name}
              </p>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-slate-500 font-normal pl-1 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>

    </section>
  )
}

export default Experience