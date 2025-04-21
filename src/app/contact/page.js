'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
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
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
  className="bg-black"
>
    <main className='min-h-screen bg-black text-white'>
      <Navbar />
      <Contact />
      <div className='mt-6 md:mt-10 px-8 md:px-16 bg-black'>
      </div>
      <Footer />
    </main>
    </motion.div>
  )
}

export default page