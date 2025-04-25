'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Services from '@/components/Services';
import Lenis from 'lenis';
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import Services2 from '@/components/Services2';
import Services3 from '@/components/Services3';
import Services4 from '@/components/Services4';
import Services5 from '@/components/Services5';

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
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
  className="bg-black"
>
    <main className='min-h-screen bg-black text-white overflow-hidden'>
    <Navbar />
    <div className='min-h-fit bg-black text-white px-6 lg:px-12 font-neue mb-8 md:mb-1'>
        <h1 className="text-xl lg:text-4xl font-light max-w-5xl py-8 md:py-16">
        Here are our services: Cutting-edge inflatable nightclubs, top-tier sound and lighting systems, customizable event setups, and a high-energy party experience—bringing the ultimate nightlife vibe to any location in Canada!
        </h1>
    </div>
    <Services />
    <Services2 />
    <Services3 />
    <Services4 />
    <Services5 />
    <Footer />
    </main></motion.div>
  )
}

export default page