import React from 'react'

const Main = () => {
  return (
    <div className='bg-[var(--color-background)]'>
      <section id="hero" className="min-h-[70vh] pt-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] sm:text-5xl md:text-6xl animate__animated animate__fadeInDown">
              <span className="block">ReactJS Developer</span>
              <span className="block text-[var(--color-text-primary)]">Building Modern Web Solutions</span>
            </h1>
            <p className="mt-3 text-base text-[var(--color-text-secondary)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate__animated animate__fadeIn">
              Passionate developer with 1.2 years of experience in creating responsive and dynamic web applications using React.js and modern technologies.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate__animated animate__fadeInUp">
              <div className="rounded-md shadow">
                <a href="#contact" className="group relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#000000] hover:bg-[#333333] md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-transform duration-300">
                  {/* <a href="#contact" className="group relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#000000] hover:bg-[#333333] md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-transform duration-300 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"> */}
                  Get in touch
                  {/* <span className='absolute inset-x-0 -bottom-px bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-primary)] to-transparent h-px w-3/4 mx-auto'></span>
                  <span className='absolute inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-px bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-primary)] to-transparent h-[4px] w-full mx-auto blur-sm'></span> */}
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#projects" className="group relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-hover)] md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-transform duration-300">
                  View Projects
                  <span className='absolute inset-x-0 -bottom-px bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-primary)] to-transparent h-px w-3/4 mx-auto'></span>
                  <span className='absolute inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-px bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-primary)] to-transparent h-[4px] w-full mx-auto blur-sm'></span>
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