import About from './components/About'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className="font-light text-white antialiased 
    selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Work /> 
      <Contact />
    </main>
  )
}

export default App
