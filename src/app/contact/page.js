'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GoogleReviews from '@/components/GoogleReview'
import Navbar from '@/components/Navbar'
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
      <div className='mt-6 md:mt-10 px-8 md:px-16 bg-black'>
      <GoogleReviews />
      </div>
      <Footer />
    </main>
  )
}

export default page