import React from 'react'
import { Link } from 'react-router'
import BottomFooter from './BottomFooter'
import SocialIcon from '../../common/SocialIcon/SocialIcon'
const TopFooter = () => {
  const quickLinks = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
    { name: 'Privacy Policy', link: '#privacy-policy' },
  ]
  return (
    <footer id="footer" className="bg-[var(--color-footer-background)] text-[var(--color-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Portfolio</h3>
            <p className="text-[var(--color-footer-text)]">React.js Developer with expertise in building modern web applications.</p>
            <div className="flex space-x-4">
              <SocialIcon
                platform="Githubfooter"
                url="https://github.com/nikhilBhagoria/"
              />
              <SocialIcon
                platform="Linkedinfooter"
                url="https://www.linkedin.com/in/nikhilbhagoria/"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-[var(--color-footer-text)] hover:text-[var(--color-footer-hover)] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li className="text-[var(--color-footer-text)]">React.js</li>
              <li className="text-[var(--color-footer-text)]">JavaScript</li>
              <li className="text-[var(--color-footer-text)]">Redux Toolkit</li>
              <li className="text-[var(--color-footer-text)]">GraphQL</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-[var(--color-footer-text)]">
                <svg className="h-5 w-5 mr-2 text-[var(--color-gradient-start)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a className='hover:text-[var(--color-footer-hover)] truncate' href="mailto:nikhilkumar2450@gmail.com?subject=Inquiry%20from%20Portfolio">
                  nikhilkumar2450@gmail.com
                </a>
              </li>
              <li className="flex items-center text-[var(--color-footer-text)]">
                <svg className="h-5 w-5 mr-2 text-[var(--color-gradient-start)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                India
              </li>
            </ul>
          </div>
        </div>

        <BottomFooter />
      </div>
    </footer>
  )
}

export default TopFooter