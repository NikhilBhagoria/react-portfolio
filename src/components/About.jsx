import React from 'react'
import aboutImg from '../assets/about4.jpeg'

const About = () => {
    return (
        <div name='about' className='py-10 text-white bg-[#232325] h-auto overflow-hidden' id='about' data-aos="fade-left">
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                <div>
                    <div className='w-[400px] h-full'>
                        <img alt='about' src={aboutImg} className='object-cover bg-gray-700 rounded-xl h-[300px] filter brightness-50 grayscale' />
                    </div>
                </div>
                <div>
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                            I am a passionate frontend developer with 9 months of hands-on experience in building dynamic and responsive web applications using ReactJS. My background in C and C++ has provided me with a strong foundation in programming logic, which I leverage to create efficient and maintainable code. I am well-versed in modern web development technologies including HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. I am always eager to learn and implement new technologies to improve the user experience and performance of web applications.
                            </p>
                        </div>
                    </div>

                    {/* <div className="flex mt-10 items-center gap-7">
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                                <span>+</span>
                            </h3>
                            <p><span className="md:text-base text-xs">Project</span></p>

                        </div>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">1
                                <span>+</span>
                            </h3>
                            <p><span className="md:text-base text-xs">years experience</span></p>

                        </div>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                                <span>+</span>
                            </h3>
                            <p><span className="md:text-base text-xs">happy clients</span></p>

                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About