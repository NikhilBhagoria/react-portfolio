import Header from './components/layout/Header/Header';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import { Route, Routes } from 'react-router';
import Scrolling from './components/common/Scrolling/Scrolling';
function App() {

  return (
    <>
      <div className='bg-[#0F1115] relative min-h-screen'> {/* Added relative and min-h-screen */}
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <div className="fixed inset-0 w-full h-full bg-[length:109px] bg-repeat opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'url(bg-image.png)' }}>
        </div>
      </div>
      {/* <div>
        <Scrolling />
      </div> */}
    </>
  )
}

export default App
