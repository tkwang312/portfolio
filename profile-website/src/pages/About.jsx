import React from 'react'

import { languages, skills } from '../constants/constants_index';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am <span className="blue-gradient_text font-semibold">Tony</span>
      </h1>
      <br/>
      <div>
        <p>
          I am a software engineer based in Vancouver, BC, Canada, with a keen interest in machine learning and web development. 
          I consider myself a perpetual learner, driven by a passion for exploring and experimenting with new concepts, both within and beyond the realm of software.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Programming Languages</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {languages.map((language) => (
            // eslint-disable-next-line react/jsx-key
            <div className='block-container w-20 h-20'>
              <div>
                <img 
                  src={language.imageUrl}
                  alt={language.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            // eslint-disable-next-line react/jsx-key
            <div className="block-container w-20 h-20">
              <div>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default About