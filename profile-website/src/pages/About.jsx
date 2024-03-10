/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import smile from '../assets/images/wechat-smile.jpeg'
import flying from '../assets/images/flying.JPG'
import dosan from '../assets/images/startup-me.png'


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am <span className="blue-gradient_text font-semibold">Tony</span>
      </h1>
      <br/>
      <div>
        <h3 className='text-2xl font-semibold'>
          As a Software Engineer:
        </h3>
        <div>
          <p className='my-1'>
            I am a software engineer and student at the University of Toronto with a keen interest in machine learning and web development. 
            I consider myself a perpetual learner, driven by a passion for exploring and experimenting with new concepts, both within and beyond the realm of software.
            Recently, I have been learning about ThreeJs and Multi-Head Self Attention models. 
          </p>
        </div>
      </div>
      <br/>
      <div>
        <h3 className='text-2xl font-semibold'>
          As a Person:
        </h3>
        <div className='flex'>
          <p className='my-1'>
            Three words I would use to describe myself are: easygoing, resilient, empathetic. This is because, although I am not perfect,
            I always strive to be the best version of myself as a friend, a family member, and a peer. Outside of programming,
            I am passionate about sports. This includes but not limited to basketball, skiing/snowboarding, soccer(or football!), and figure skating. 
            I also enjoy spending my free time watching different shows from around the world. Some of my favourites include Korean drama "Start-Up" and
            Japanese animated show "One Piece". If you want to talk about about anything I just mentioned feel free to reach out anytime! 
          </p>
          {/* <img src={smile} className='w-4 h-4' /> */}
        </div>
      </div>
      
      <div className='my-10 flex items-center space-x-5'>
        <div className='flex-col'> 
          <img src={dosan} className='object-contain about-image'/>
          <div className='text-center'>
            <p>
              Dressing up as fictional AI startup-owner Nam Dosan
            </p>
          </div>
        </div>

        <div className='flex-col'>
          <img src={flying} className='object-contain about-image'/>
          <div className='text-center'>
            <p>
              Falling for a pump fake (translation: loves to fly)
            </p>

          </div>
        </div>
      </div>


    </section>
  )
}

export default About