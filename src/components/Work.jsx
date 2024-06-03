import React from 'react'
import project1 from '../assets/project2.png';
import project2 from '../assets/project1.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
const Work = () => {
  return (
    <div name='work' className='py-6 max-w-[1200px] mx-auto' id='work'>
        <div className="mx-auto px-4 md:px-8" >
            <div className="mb-4 flex items-center justify-between">
                <div className="flex flex-row gap-4">
                    <h2 className='text-2xl lg:text-3xl text-white'>My <span>Project</span></h2>
                    <p className='text-gray-500'>
                        These are my latest projects for different clients
                    </p>
                </div>
            </div>
            <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8'>
                <a href='https://guileless-cat-c5f272.netlify.app/' target='_blank' className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={project1} alt='image 1' className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110'/>
                </a>

                <a href='https://guileless-cat-c5f272.netlify.app/' target='_blank' className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={project2} alt='image 1' className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110'/>
                </a>
                
                <a href='https://kpfitness.netlify.app/' target='_blank' className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={project3} alt='image 3' className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110'/>
                </a>

                <a href='https://kpfitness.netlify.app/' target='_blank' className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={project4} alt='image 4' className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Work