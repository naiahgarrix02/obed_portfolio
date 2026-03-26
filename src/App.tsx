import './App.css'
import Hero from './components/Hero'
import Carousel from './components/Carousel'

import LenisScroll from './components/LenisScroll'
import About from './components/About'
import Services from './components/Services'


function App() {
  

  return (
    <LenisScroll>
      <Hero />
      <Carousel />
      <About />
      <Services />
    </LenisScroll>
  )
}

export default App
