'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const page = () => {

  useEffect(() => {
          const lenis = new Lenis();
      
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
      
          requestAnimationFrame(raf);
        }, []);

  return (
    <main className='min-h-screen bg-black text-white'>
      <Navbar />
      <Contact />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default page