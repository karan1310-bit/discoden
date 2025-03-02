'use client'
import Navbar from '@/components/Navbar'
import SliderPage from '@/components/SliderPage';
import Lenis from 'lenis';
import React, { useEffect } from 'react'

const page = () => {

    useEffect(() => {
        const lenis = new Lenis();
    
        lenis.on("scroll", (e) => {
          console.log(e);
        });
    
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
      }, []);

  return (
    <main className='min-h-screen bg-black text-white overflow-hidden'>
        <Navbar />
        <SliderPage />
    </main>
  )
}

export default page