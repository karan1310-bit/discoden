'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Services from '@/components/Services';
import Lenis from 'lenis';
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
    <main className='min-h-screen bg-black text-white overflow-hidden'>
    <Navbar />
    <h1 className='text-center font-neue mt-6 text-xl md:text-3xl mb-[10vh]'>Services</h1>
    <Services />
    <Services />
    <Services />
    <Footer />
    </main>
  )
}

export default page