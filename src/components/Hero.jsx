import React from 'react'
import { AiFillLinkedin ,AiFillGithub } from 'react-icons/ai'
import { TbBrandLeetcode } from "react-icons/tb";
import { TypeAnimation } from 'react-type-animation'
import profilepic from '../assets/profilecover.png'
import hand from '../assets/hand.png';
const Hero = () => {
  return (
    <div>
        <div data-aos="zoom-out" name='home' className='overflow-hidden my-7 sm:my-0 max-x-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center' id='home'>
            <div className='flex-col my-auto mx-auto'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi! I am Nikhil Bhagoria
                <span class="wave-emoji"><img alt="👋" draggable="false" src={hand} style={{height: "1em", width: "1em", margin: "0px 0.05em 0px 0.1em", verticalalign: "-0.1em"}}/></span>
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    <TypeAnimation sequence={[
                        "ReactJS",
                        1000,
                        "Web",
                        1000,
                        "Developer",
                        1000
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>With 9 months experience</p>
                </div>
                <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                   <a href={"https://in.linkedin.com/in/nikhilbhagoria"} target='_blank'> <AiFillLinkedin/></a>
                   <a href={"https://github.com/nikhilbhagoria"} target='_blank'> <AiFillGithub/></a>
                   <a href={"https://leetcode.com/u/nikhilbhagoria/"} target='_blank'> <TbBrandLeetcode /> </a>
                </div>
                <div className='relative inline-flex group my-3'>
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href='/' title='Download CV' role='button'
                    className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset02 focus:ring-gray-900'>Download CV</a>
                </div>
            </div>

            <div className='my-auto '>
                {/* <p className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-ful'></p> */}
                <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-ful' src={profilepic} alt='profile pic' />
            </div>
        </div>
    </div>
  )
}

export default Hero