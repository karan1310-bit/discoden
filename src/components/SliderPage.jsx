import React from 'react'
import Slider from './Slider'
import About from './About'
import Footer from './Footer'

const SliderPage = () => {
  return (
    <main className='min-h-screen bg-black text-white'>
      <About />
      <Slider />
      <Footer />
    </main>
  )
}

export default SliderPage
