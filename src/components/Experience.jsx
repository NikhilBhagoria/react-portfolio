import React from 'react'

const Experience = () => {
  return (
    <div name="experience" className='py-10 bg-[#232325]' id='experience'>
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>

        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Extensive Host Pvt. Ltd</p>
            <p className='text-gray-400'>(Sep 2023 - Present)</p>
            <p className='text-gray-500'>
                <ul>
                    <li className='my-2'>Modernized a three hosting providers CRM website using ReactJS, leading in a 50% gain in speed and a 20% decrease in development time.
                    </li>
                    <li className='my-2'>Designed and implemented the whole front-end architecture, including a responsive website that enhanced the user interface and experience.</li>
                </ul>
            </p>
        </div>

        <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto'></div>

        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Neerja Softwares Pvt. ltd</p>
            <p className='text-gray-400'>(Feb 2023 - July 2023)</p>
            <p className='text-gray-500'>
                <ul>
                    <li className='my-2'>Worked on front-end development projects utilizing HTML, CSS, Bootstrap, JavaScript, and ReactJS.</li>
                    <li className='my-2'>Gained firsthand knowledge with responsive web design ideas and execution.</li>
                </ul>
            </p>
        </div>

        {/* <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto'></div>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Second Company</p>
            <p className='text-gray-400'>(2020 - Present)</p>
            <p className='text-gray-500'>
                Description of your experience in this company.
            </p>
        </div>
        
        <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto'></div>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Second Company</p>
            <p className='text-gray-400'>(2020 - Present)</p>
            <p className='text-gray-500'>
                Description of your experience in this company.
            </p>
        </div> */}

    </div>
  )
}

export default Experience