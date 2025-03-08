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
    <div className='min-h-fit bg-black text-white px-6 lg:px-16 font-neue mb-8 md:mb-1'>
        <h1 className="text-3xl lg:text-5xl font-medium max-w-4xl py-8 md:py-16">
        Here are our services: Cutting-edge inflatable nightclubs, top-tier sound and lighting systems, customizable event setups, and a high-energy party experience—bringing the ultimate nightlife vibe to any location in Canada!
        </h1>
    </div>
    <Services />
    <Services />
    <Services />
    <Footer />
    </main>
  )
}

export default page