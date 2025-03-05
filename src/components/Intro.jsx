import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import background from '../../public/medias/5.jpg';
import { RiVipLine } from "react-icons/ri";
import { GiBalloons, GiSofa } from 'react-icons/gi';
import { GiMusicSpell } from "react-icons/gi";
import Image from 'next/image';

export default function Intro() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div 
      ref={containerRef} 
      style={{ position: "relative", overflow: "hidden", height: "100vh" }}
    >
      <motion.div style={{ y, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image 
          src={background}
          alt="Background" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </motion.div>

      {/* Grid Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 md:w-full max-w-4xl relative font-neue z-10">
          {/* VIP Zone */}
          <div className="bg-orange-500 bg-opacity-50 p-6 md:p-8 md:mb-20 text-white flex flex-col justify-center items-center text-center rounded-lg relative backdrop-blur-3xl">
            <RiVipLine className="text-5xl md:text-7xl mb-4" />
            <p className="text-sm md:text-base font-semibold">VIP Zone</p>
          </div>
          {/* 360 Video Booth */}
          <div className="bg-gray-600 bg-opacity-30 p-6 md:p-8 md:mt-20 text-white flex flex-col justify-center items-center text-center rounded-lg relative backdrop-blur-lg">
            <GiBalloons className="text-5xl md:text-7xl mb-4" />
            <p className="text-sm md:text-base font-semibold">360 Video Booth</p>
          </div>
          {/* LED Furniture */}
          <div className="bg-orange-500 bg-opacity-50 p-6 md:p-8 md:mb-20 text-white flex flex-col justify-center items-center text-center rounded-lg relative backdrop-blur-3xl">
            <GiSofa className="text-5xl md:text-7xl mb-4" />
            <p className="text-sm md:text-base font-semibold">LED Furniture</p>
          </div>
          {/* Professional DJ */}
          <div className="bg-gray-600 bg-opacity-30 p-6 md:p-8 md:mt-20 text-white hidden md:flex flex-col justify-center items-center text-center rounded-lg relative backdrop-blur-lg">
            <GiMusicSpell className="text-5xl md:text-7xl mb-4" />
            <p className="text-sm md:text-base font-semibold">Professional DJ</p>
          </div>
        </div>
      </div>
    </div>
    )
}