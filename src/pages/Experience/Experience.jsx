import React from 'react'
import HeaderTitle from '../../components/common/HeaderTitle/HeaderTitle'

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: 'React Developer',
      company: 'EXTENSIVE HOST PVT. LTD',
      duration: 'Sep 2023 - Oct 2024',
      description: 'Developed and maintained multiple React.js applications',
      responsibilities: [
        'Developed and maintained multiple React.js applications',
        'Implemented state management using Redux Toolkit',
        'Created reusable components and custom hooks',
        'Integrated REST APIs and GraphQL endpoints',
      ]
    },
    {
      id: 2,
      title: 'React Developer Intern',
      company: 'NEERJA SOFTWARES PVT. LTD',
      duration: 'Feb 2023 - July 2023',
      description: 'Assisted in developing UI components using React.js',
      responsibilities: [
        'Assisted in developing UI components using React.js',
        'Worked with Material UI and Tailwind CSS',
        'Implemented form validation using Formik',
        'Collaborated with team using Git workflow',
      ]
    }
  ]
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <section id="experience">
        <div className="max-w-7xl mx-auto">
          <HeaderTitle title="Professional Experience" conten='Experience' />

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--color-accent-primary)]"></div>

            <div className="space-y-12">
              <div className="relative animate__animated animate__fadeInLeft">
                <div className="flex items-center w-full my-6">
                  <div className="w-1/2 pr-2 md:pr-8 text-right">
                    <div className="p-6 bg-[var(--color-card-bg)] rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">React Developer</h3>
                      <p className="text-[var(--color-accent-primary)] font-semibold">EXTENSIVE HOST PVT. LTD</p>
                      <p className="text-[var(--color-text-secondary)]">Sep 2023 - Oct 2024</p>
                      <ul className="mt-4 text-[var(--color-text-secondary)] list-disc list-inside space-y-2">
                        <li className='text-sm'>Developed and maintained multiple React.js applications</li>
                        <li className='text-sm'>Implemented state management using Redux Toolkit</li>
                        <li className='text-sm'>Created reusable components and custom hooks</li>
                        <li className='text-sm'>Integrated REST APIs and GraphQL endpoints</li>
                      </ul>
                    </div>
                  </div>
                  <div className="z-20 flex items-center justify-center w-8 h-8 bg-[var(--color-accent-primary)] rounded-full">
                    <svg className="w-5 h-5 text-[var(--color-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>

              <div className="relative animate__animated animate__fadeInRight">
                <div className="flex items-center w-full my-6">
                  <div className="w-1/2"></div>
                  <div className="z-20 flex items-center justify-center w-8 h-8 bg-[var(--color-accent-primary)] rounded-full">
                    <svg className="w-5 h-5 text-[var(--color-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <div className="w-1/2 md:pl-8 pl-2">
                    <div className="p-6 bg-[var(--color-card-bg)] rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">ReactJS Developer Intern</h3>
                      <p className="text-[var(--color-accent-primary)] font-semibold">NEERJA SOFTWARES PVT. LTD</p>
                      <p className="text-[var(--color-text-secondary)]">Feb 2023 - July 2023</p>
                      <ul className="mt-4 text-[var(--color-text-secondary)] list-disc list-inside space-y-2">
                        <li className='text-sm'>Assisted in developing UI components using React.js</li>
                        <li className='text-sm'>Worked with Material UI and Tailwind CSS</li>
                        <li className='text-sm'>Implemented form validation using Formik</li>
                        <li className='text-sm'>Collaborated with team using Git workflow</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="relative animate__animated animate__fadeInLeft">
            <div className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/2 pr-8 text-right">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-neutral-900">Freelance Web Developer</h3>
                  <p className="text-blue-600 font-semibold">Self-Employed</p>
                  <p className="text-neutral-600">Jan 2022 - June 2022</p>
                  <ul className="mt-4 text-neutral-600 list-disc list-inside space-y-2">
                    <li>Built custom websites for clients</li>
                    <li>Created responsive layouts using modern CSS</li>
                    <li>Implemented interactive features with JavaScript</li>
                    <li>Managed project timelines and client communication</li>
                  </ul>
                </div>
              </div>
              <div className="z-20 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience