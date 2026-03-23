import './App.css'
import Hero from './components/Hero'
import Carousel from './components/Carousel'

import LenisScroll from './components/LenisScroll'
import About from './components/About'


function App() {
  

  return (
    <LenisScroll>
      <Hero />
      <Carousel />
      <About />
    </LenisScroll>
  )
}

export default App
