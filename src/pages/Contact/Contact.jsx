import React, { useState } from 'react'
import SocialIcon from '../../components/common/SocialIcon/SocialIcon';
import HeaderTitle from '../../components/common/HeaderTitle/HeaderTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeaderTitle title="Get in Touch" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate__animated animate__fadeInLeft">
              <div className="bg-[var(--color-card-bg)] p-8 rounded-lg shadow-lg">
                <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                  <LabelledInput label="Name" type="text" value={formData.name} onChange={handleChange} />
                  <LabelledInput label="Email" type="email" value={formData.email} onChange={handleChange} />
                  <LabelledInput label="Message" type="textarea" value={formData.message} onChange={handleChange} />
                  <div>
                    <button
                      type="submit"
                      className="w-full group flex justify-center items-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-[var(--color-button-text)] bg-[var(--color-button-bg)] border-2 border-[var(--color-button-border)] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={false}
                    >
                      <span className="transition-transform duration-300 group-hover:mr-1 group-hover:border-b-2 group-hover:border-[var(--color-button-border)]">
                        Send Message
                      </span>
                      <svg
                        className="w-4 h-4 opacity-0 -mr-6 group-hover:mr-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight">
              <div className="bg-[var(--color-card-bg)] p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--color-accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-[var(--color-text-primary)]">Email</p>
                      <p className="text-[var(--color-text-secondary)]">nikhilkumar2450@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--color-accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-[var(--color-text-primary)]">Location</p>
                      <p className="text-[var(--color-text-secondary)]">India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[var(--color-accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-[var(--color-text-primary)]">Social Media</p>
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

const LabelledInput = ({ label, type, value, onChange, required = true }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-[var(--color-text-primary)]">{label}</label>
      {type === "textarea" ? <textarea value={value} onChange={onChange} id={label} name={label} required={required} className="mt-1 block w-full px-4 py-3 border border-[var(--color-text-secondary)] bg-white text-[var(--color-text-primary)] rounded-md shadow-sm focus:ring-[var(--color-accent-primary)] focus:border-[var(--color-accent-primary)]" />
        : <input type={type} value={value} onChange={onChange} id={label} name={label} required={required} className="mt-1 block w-full px-4 py-3 border border-[var(--color-text-secondary)] bg-white text-[var(--color-text-primary)] rounded-md shadow-sm focus:ring-[var(--color-accent-primary)] focus:border-[var(--color-accent-primary)]" />}
    </div>
  )
}

export default Contact