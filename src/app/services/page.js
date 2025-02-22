'use client'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
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
    <main className='bg-black text-white'>
    <Navbar />
    <Services />
    <Services />
    <Services />
    </main>
  )
}

export default page