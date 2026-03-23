import './App.css'
import Hero from './components/Hero'
import Carousel from './components/Carousel'

import LenisScroll from './components/LenisScroll'


function App() {
  

  return (
    <LenisScroll>
      <Hero />
      <Carousel />
    </LenisScroll>
  )
}

export default App
