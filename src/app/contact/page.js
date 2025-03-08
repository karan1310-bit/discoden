'use client'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
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
      <Form />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default page