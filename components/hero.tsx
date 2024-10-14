import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TexeGenerateEffect'
import MagicButton from './ui/magicButton'
import { FaLocationArrow } from 'react-icons/fa'
import myPfImage from "../public/myPfImg.png"
import Image from 'next/image'
import { socialMedia } from '../data'

function Hero() {
  return (
    <div className='pb-20 pt-36 relative'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='top-10 left-full w-[50vh]'
          fill='purple'
        />
        <Spotlight
          className='top-28 left-80 h-[80vh] w-[50vw]'
          fill='blue'
        />
      </div>
 
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center absolute top-0 left-0 justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      {/* Social media icons positioned on the right */}
      

      <div className='flex flex-col-reverse md:flex-row justify-center items-center relative my-8 z-10 gap-8'>
        {/* Image Section */}
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] flex-shrink-0 flex items-center justify-center">
          <Image
            src={myPfImage}
            alt="Profile Image"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>

        {/* Text Section */}

        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center md:items-start justify-center'>
        <div className=" right-6 flex items-center gap-4">
        {socialMedia.map((info) => (
          <a 
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="social icon" width={20} height={20} />
          </a>
        ))}
      </div>
          <h2 className='uppercase mt-8 tracking-widest text-xs lg:ml-40 text-center md:text-left text-blue-100 max-w-80'>
            We help you achieve your goals faster 
          </h2>

          <TextGenerateEffect 
            className='text-center md:text-left text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts into Seamless User Experiences'
          />

          <p className='text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi I&apos;m Ahmed, a MERN Stack Developer based in Pakistan.  
            I create dynamic, responsive web applications with modern technologies. 
          </p>

          <a href='#projects'>
            <MagicButton
              title="check my work"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
