import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import Main from '../../../pages/Main/Main'
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
      <nav className={`fixed w-full bg-neutral-900 md:p-[20px_20px_40px] z-50 md:bg-transparent md:bg-[radial-gradient(transparent_1px,_rgb(15,17,21)_1px)] md:bg-[size:4px_4px] md:backdrop-blur-[3px] md:[mask-image:linear-gradient(rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">Portfolio</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {HeaderMenu.map((item, index) => (
                  <a key={index} href={item.link} className={`text-[rgba(245,245,245,1)] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors `}>{item.name}</a>
                  // <a key={index} href={item.link} onClick={() => setSelectedSection(item.name)} className={`text-[rgba(245,245,245,1)] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${selectedSection === item.name ? 'border border-white' : ''}`}>{item.name}</a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button id="mobile-menu-button" ref={buttonRef} onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" ref={menuRef} className={`md:hidden bg-neutral-900 ${isOpen ? "block" : "hidden"} `}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {HeaderMenu.map((item, index) => (
              <a key={index} href={item.link} onClick={() => setSelectedSection(item.name)} className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${selectedSection === item.name ? 'border-b-2 border-white' : ''}`}>{item.name}</a>
            ))}
          </div>
        </div>
      </nav>
      <Main />
    </>
  )
}

export default Header