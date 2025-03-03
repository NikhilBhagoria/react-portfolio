import Header from './components/layout/Header/Header';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

function App() {

  return (
    <>
      <div className='bg-[var(--color-background)] relative min-h-screen'> {/* Updated to use CSS variable */}
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
    </>
  )
}

export default App
