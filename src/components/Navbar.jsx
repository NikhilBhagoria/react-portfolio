import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import NB from '../assets/NB.svg';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l'>
            <h1 className='text-3xl font-bold primary-color ml-4'>
                <a href='/'> <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 479.91 402.59"
                    width="40"
                    height="40"
                >
                    <defs>
                        <style>
                            {`
          .cls-1 {
            fill-rule: evenodd;
            stroke-width: 0px;
            fill: url(#grad1);
          }
        `}
                        </style>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#dd32f3', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#ce90cb', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        className="cls-1"
                        d="m479.91,301.94c0-55.35-45.29-100.65-100.65-100.65h-21.33c55.36,0,100.65-45.29,100.65-100.65S413.29,0,357.93,0h-18v297.35c0,21.39-2.31,40.49-26.43,48.59-16.97,5.4-29.52-.56-41.76-11.78l-127.25-116.63v185.06h234.77c55.36,0,100.65-45.29,100.65-100.65h0ZM262.61,0H0v402.59h67.18V128.75c0-38,40.32-50.01,69.42-23.34l104.61,95.88,21.4,19.62V0h0Z"
                    />
                </svg>
                </a>
                {/* <img src={NB} alt='logo' style={{color:"red",width:"40px",height:"40px"}} /> */}
            </h1>
            <ul className='hidden md:flex gap-2.5'>
                <li className="rounded-md px-5 py-2.5 hover:shadow=[0 2px 10px #2ab0ee] text-white hover:bg-[#2ab0ee] transition duration-500 ease-in-out">
                    <Link to="home" smooth={true} duration={500}>
                         Home
                    </Link>
                </li>
                <li className="rounded-md px-5 py-2.5 hover:shadow=[0 2px 10px #eb6559] text-white hover:bg-[#eb6559] transition duration-500 ease-in-out">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="rounded-md px-5 py-2.5 hover:shadow=[0 2px 10px #f7b908] text-white hover:bg-[#f7b908] transition duration-500 ease-in-out"><Link to="work" smooth={true} duration={600}>Work</Link></li>
                <li className="rounded-md px-5 py-2.5 hover:shadow=[0 2px 10px #e44160] text-white hover:bg-[#e44160] transition duration-500 ease-in-out"><Link to="experience" smooth={true} duration={700}>Experience</Link></li>
                <li className="rounded-md px-5 py-2.5 hover:shadow=[0 2px 10px #47a148] text-white hover:bg-[#47a148] transition duration-500 ease-in-out"><Link to="contact" smooth={true} duration={800}>Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>
                    <a href='/'> <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 479.91 402.59"
                        width="40"
                        height="40"
                    >
                        <defs>
                            <style>
                                {`
          .cls-1 {
            fill-rule: evenodd;
            stroke-width: 0px;
            fill: url(#grad1);
          }
        `}
                            </style>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#dd32f3', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#ce90cb', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path
                            className="cls-1"
                            d="m479.91,301.94c0-55.35-45.29-100.65-100.65-100.65h-21.33c55.36,0,100.65-45.29,100.65-100.65S413.29,0,357.93,0h-18v297.35c0,21.39-2.31,40.49-26.43,48.59-16.97,5.4-29.52-.56-41.76-11.78l-127.25-116.63v185.06h234.77c55.36,0,100.65-45.29,100.65-100.65h0ZM262.61,0H0v402.59h67.18V128.75c0-38,40.32-50.01,69.42-23.34l104.61,95.88,21.4,19.62V0h0Z"
                        />
                    </svg>
                </a>

                </h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='p-2'><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li className='p-2'><Link to='work' smooth={true} duration={600}>Work</Link></li>
                    <li className='p-2'><Link to='experience' smooth={true} duration={700}>Experience</Link></li>
                    <li className='p-2'><Link to='contact' smooth={true} duration={800}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar