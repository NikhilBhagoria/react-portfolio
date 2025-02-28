import React from 'react'
import HeaderTitle from '../../components/common/HeaderTitle/HeaderTitle'
import ProjectLinks from '../../components/common/ProjectLinks/ProjectLinks'
const Projects = () => {
  return (
    // old design
    // <div>
    //   <section id="projects" className="py-20 bg-neutral-900">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-16 animate__animated animate__fadeIn">
    //         <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
    //           Featured Projects
    //         </h2>
    //         <div className="mt-4 max-w-3xl mx-auto">
    //           <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp">
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold text-white mb-2">Youtube Clone</h3>
    //             <p className="text-neutral-400 mb-4">A clone of the popular video-sharing platform, YouTube, built with React.js, Redux Toolkit, and Tailwind CSS.</p>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">React.js</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Redux Toolkit</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">YouTube API</span>
    //             </div>
    //             <ProjectLinks
    //               demoLink="https://clinquant-chebakia-d8a963.netlify.app/"
    //             />
    //           </div>
    //         </div>

    //         <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp [animation-delay:200ms]">
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold text-white mb-2">Task Management App</h3>
    //             <p className="text-neutral-400 mb-4">A collaborative task management platform with real-time updates and team features.</p>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">React.js</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">GraphQL</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">PostgreSQL</span>
    //             </div>
    //             <div className="flex justify-between">
    //               <a href="#" className="text-blue-500 hover:text-blue-400 flex items-center">
    //                 <span>Live Demo</span>
    //                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    //                 </svg>
    //               </a>
    //               <a href="#" className="text-blue-500 hover:text-blue-400 flex items-center">
    //                 <span>GitHub</span>
    //                 <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
    //                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    //                 </svg>
    //               </a>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp [animation-delay:400ms]">
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold text-white mb-2">Social Media Platform</h3>
    //             <p className="text-neutral-400 mb-4">A social networking app with real-time chat and post features.</p>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">React.js</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Redux</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Prisma</span>
    //               <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Docker</span>
    //             </div>
    //             <div className="flex justify-between">
    //               <a href="#" className="text-blue-500 hover:text-blue-400 flex items-center">
    //                 <span>Live Demo</span>
    //                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    //                 </svg>
    //               </a>
    //               <a href="#" className="text-blue-500 hover:text-blue-400 flex items-center">
    //                 <span>GitHub</span>
    //                 <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
    //                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    //                 </svg>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mt-12 text-center">
    //         <a href="https://github.com/yourusername" target="_blank" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
    //           View More Projects
    //           <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    //             <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    // new design
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-tg7ma7jf">
        <HeaderTitle title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp border border-neutral-700">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">E-Commerce Dashboard</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">A comprehensive admin dashboard with analytics, order management, and inventory tracking.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">React.js</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Redux Toolkit</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Material UI</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Chart.js</span>
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                  <span className="font-medium">Live Demo</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                  <span className="font-medium">GitHub</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp border border-neutral-700 " style={{ animationDelay: '0.2s' }}>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Task Management App</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">A collaborative task management platform with real-time updates and team features.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">React.js</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">GraphQL</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                  <span className="font-medium">Live Demo</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                  <span className="font-medium">GitHub</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp border border-neutral-700" style={{ animationDelay: '0.4s' }}>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Social Media Platform</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">A social networking app with real-time chat and post features.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">React.js</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Redux</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Prisma</span>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 rounded-full text-sm font-medium">Docker</span>
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                  <span className="font-medium">Live Demo</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center group">
                  <span className="font-medium">GitHub</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/yourusername" target="_blank" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View More Projects
            <svg className="ml-3 w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects