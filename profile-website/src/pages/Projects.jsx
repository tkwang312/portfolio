/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { Player } from 'video-react';
import { projects } from '../constants/constants_index'
import { Link } from 'react-router-dom'
import 'video-react/dist/video-react.css';
import github from "../assets/icons/github.svg"

import ns_mountains_demo from '../assets/videos/ns_mountains_demo.mp4'

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold">Projects</span>
      </h1>

      <br/>

      <div>
        <p>
          As someone passionate about exploration, creation, and experimentation, I was initially drawn to programming by the allure of building projects.
          Over the years, I've embarked on numerous coding endeavors, each contributing to my growth and experience. 
          However, there are a select few projects that hold a special place in my heart.

        </p>
      </div>

      <div className='flex flex-wrap my-8 gap-16'>
        {projects.map((project) => (
        <div>
          <div className='mt-5 flex flex-col'>
          <div className='flex items-center gap-1 font-poppins'>
              <img 
                src={github}
                alt="github"
                className='w-4, h-4 object-contain'
              />
              <Link
                to={project.link}
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Github Link
              </Link>
            </div>
            <h4 className='flex flex-col font-semibold'>
              {project.name}
            </h4>
            <p>
              {project.description}
            </p>
          </div>
          <div className='block-container w-50 h-50'>
            <Player>
              <source src={ns_mountains_demo} />
            </Player>
          </div>
        </div>
        ))}
      </div>

    </section>
  )
}

export default Projects