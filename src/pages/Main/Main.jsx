import React from 'react'

const Main = () => {
  return (
    <div className='bg-[#0F1115]'>
      <section id="hero" className="min-h-[70vh] pt-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate__animated animate__fadeInDown">
              <span className="block">ReactJS Developer</span>
              <span className="block text-[#d3fbd8]">Building Modern Web Solutions</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate__animated animate__fadeIn">
              Passionate developer with 1.2 years of experience in creating responsive and dynamic web applications using React.js and modern technologies.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate__animated animate__fadeInUp">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#18b385]/80 hover:bg-[#18b385]/90 md:py-4 md:text-lg md:px-10 transform hover:scale-105 hover:rotate-2 transition-transform duration-300">
                  Get in touch
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007d53] hover:bg-[#007d53]/90 md:py-4 md:text-lg md:px-10 transform hover:scale-105 hover:rotate-2 transition-transform duration-300"> {/*text-blue-600*/}
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main