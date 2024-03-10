/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { languages, skills } from '../constants/constants_index';

const Skills = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text blue-gradient_text'>
        Skills
      </h1>
      <br/>
      <div>
        <p>
          Throughout my years coding, I've acquired numerous skills. I love exploring new concepts 
          and discovering new technologies. Below are some of the languages and technologies I've had a chance to learn so far
          in my programming journey.
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

export default Skills