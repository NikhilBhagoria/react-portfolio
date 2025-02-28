import React, { useState } from 'react'
import SocialIcon from '../../components/common/SocialIcon/SocialIcon';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <section id="contact" className="py-20"> {/*bg-neutral-100*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Get in Touch
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
              <p className="mt-4 text-xl text-neutral-600">Let's discuss your project requirements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate__animated animate__fadeInLeft">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
                    <input type="text" value={formData.name} onChange={handleChange} id="name" name="name" required="" className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
                    <input type="email" value={formData.email} onChange={handleChange} id="email" name="email" required="" className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">Subject</label>
                    <input type="text" value={formData.subject} onChange={handleChange} id="subject" name="subject" required="" className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
                    <textarea value={formData.message} onChange={handleChange} id="message" name="message" rows="4" required="" className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-neutral-900">Email</p>
                      <p className="text-neutral-600">nikhilkumar2450@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-neutral-900">Location</p>
                      <p className="text-neutral-600">India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-neutral-900">Social Media</p>
                      <div className="flex space-x-4 mt-2">
                        <SocialIcon
                          platform="GitHub"
                          url="https://github.com/nikhilBhagoria/"
                        />
                        <SocialIcon
                          platform="LinkedIn"
                          url="https://www.linkedin.com/in/nikhilbhagoria/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact