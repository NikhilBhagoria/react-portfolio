import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import Main from '../../../pages/Main/Main'
import { motion } from "framer-motion";

const Header = () => {
  const HeaderMenu = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    // { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' },
  ]
  // Mobile View
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // New state for selected section
  const [selectedSection, setSelectedSection] = useState('');

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.getElementById('footer');
      if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();

        // Hide header only when footer starts entering viewport
        // footerRect.top will be equal to viewport height when footer is just about to enter
        setIsVisible(footerRect.top >= (window.innerHeight - 180)); // Adds 20px buffer
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeLink, setActiveLink] = useState("#hero");

  // Update active link based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#hero");
    };

    handleHashChange(); 
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  
  return (
    // <div className='flex justify-between items-center'>
    //   <div><img src={"/vite.svg"} alt="logo" /></div>
    //   <div className='flex gap-10 font-medium'>
    //     {HeaderMenu.map((item, index) => (
    //       <div key={index} className='hover:text-white transition-all duration-300 cursor-pointer text-[#d1d5db]'>
    //         <Link to={item.link}>{item.name}</Link>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <nav className={`fixed w-full bg-white md:p-[20px_20px_40px] z-50 md:bg-transparent md:bg-[radial-gradient(transparent_1px,_var(--color-background)_1px)] md:bg-[size:4px_4px] md:backdrop-blur-[3px] md:[mask-image:linear-gradient(rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] shadow-md ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-[var(--color-dark)] font-bold text-xl max-w-md"><img src='/logo.svg' alt='logo' className='md:max-w-md max-w-sm md:w-11 w-9' /></span>
            </div>
            <div className="hidden md:block relative">
              <div className="ml-10 flex items-baseline space-x-4 relative">
                {HeaderMenu.map((item, index) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors 
                    ${
                      activeLink === item.link
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                >
                  {item.name}

                  {/* Animate border underline using Framer Motion */}
                  {activeLink === item.link && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-500 rounded"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                    />
                  )}
                </a>
              ))}
              </div>
            </div>
            <div className="md:hidden">
              <button id="mobile-menu-button" ref={buttonRef} onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:bg-[var(--color-light-accent)] focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" ref={menuRef} className={`md:hidden bg-white ${isOpen ? "block" : "hidden"} `}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {HeaderMenu.map((item, index) => (
              <a key={index} href={item.link} onClick={() => setSelectedSection(item.name)} className={`text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] block px-3 py-2 rounded-md text-base font-medium ${selectedSection === item.name ? 'border-b-2 border-[var(--color-accent-primary)]' : ''}`}>{item.name}</a>
            ))}
          </div>
        </div>
      </nav>
      <Main />
    </>
  )
}

export default Header