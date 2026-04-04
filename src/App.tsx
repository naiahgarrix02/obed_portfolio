import './App.css'
import Hero from './components/Hero'
import Carousel from './components/Carousel'

import LenisScroll from './components/LenisScroll'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import TechStack from './components/TechStack'


function App() {
  

  return (
    <LenisScroll>
      <Hero />
      <Carousel />
      <About />
      <Services />
      <Projects />
      <TechStack />
    </LenisScroll>
  )
}

export default App
