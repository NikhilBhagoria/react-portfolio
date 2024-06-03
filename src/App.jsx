import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from  'aos';

function App() {
  useEffect(()=>{
    AOS.init({duration:2000});
},[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
