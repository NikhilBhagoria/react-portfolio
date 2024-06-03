import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'
const Footer = () => {
  return (
    <div name='contact' className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>Made with ❤️ by <span className='font-bold'>NK</span></p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
            <a href={"https://in.linkedin.com/in/nikhilbhagoria"} target='_blank'> <AiFillLinkedin/></a>
                   <a href={"https://github.com/nikhilbhagoria"} target='_blank'> <FaGithubSquare/> </a>
                   <a href={"https://leetcode.com/u/nikhilbhagoria/"} target='_blank'> <TbBrandLeetcode /> </a>
        </div>
    </div>
  )
}

export default Footer