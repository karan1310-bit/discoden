'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "../../public/images/disco.png";
import Book from "./Book";

const Hero = () => {
  const sunRef = useRef(null);
  const clubRef = useRef(null);
  const fmRef = useRef(null);

  useEffect(() => {
    // Create a master timeline
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.in" } });

    // Animate the sun in (scale & opacity)
    tl.fromTo(
      sunRef.current,
      { scale: 0.5, opacity: 0 ,delay: 2.5},
      { scale: 1, opacity: 1 ,delay: 2.5},
    );

    // Animate the "Club" text (slide in from left)
    tl.fromTo(
      clubRef.current,
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        ease: "power1.out", 
        duration: 0.8 
      }
    );
    
    tl.fromTo(
      fmRef.current,
      { x: 30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        ease: "power1.out", 
        duration: 0.8 
      }
    );
  

    // Create a separate timeline for infinite color cycling
    const colorTL = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Stage 1: Pink/Cyan
    colorTL.to(sunRef.current, {
      duration: 3,
      background: "linear-gradient(45deg, #ff00ff, #00ffff)",
      boxShadow: "0 0 40px 20px rgba(255, 0, 255, 0.2)",
    });
    // Stage 2: Green/Blue
    colorTL.to(sunRef.current, {
      duration: 3,
      background: "linear-gradient(45deg, #00ff00, #0000ff)",
      boxShadow: "0 0 40px 20px rgba(0, 0, 255, 0.2)",
    });
    // Stage 3: Orange/Yellow
    colorTL.to(sunRef.current, {
      duration: 3,
      background: "linear-gradient(45deg, #ffa500, #ffd700)",
      boxShadow: "0 0 40px 20px rgba(255, 165, 0, 0.2)",
    });
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col font-neue">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <main className="relative flex-grow flex flex-col items-center justify-center font-neue">
        {/* The sun (animated gradient) */}
        <div
          ref={sunRef}
          className="absolute z-50 w-[86vw] h-[86vw] lg:w-[34vw] lg:h-[34vw] rounded-full flex items-center justify-center mb-14 md:mb-32"
          style={{
            background: "linear-gradient(45deg, #FFA500, #FFD700)",
            boxShadow: "0 0 40px 20px rgba(255, 200, 0.5, 0.2)",
          }}
        >
          <Image src={logo} alt="" className="z-50 w-[84vw] h-[84vw] lg:w-[33vw] lg:h-[33vw] rounded-full"/>
          </div>

        {/* CLUB / FM TEXT */}
        <div className="flex flex-col lg:flex-row md:items-center items-start gap-40 justify-between w-full px-6 lg:px-10 lg:pt-56  lg:space-y-0">
          <div ref={clubRef} className="lg:text-start z-[99] md:pb-6 pb-16" id="club">
            <Book title="Lux">
            </Book>
            <p className="text-xl tracking-tight lg:text-5xl text-gray-300">
              See our services
              <br />
              and come dance
              <FaArrowRight className="h-10 w-12 md:h-8 md:w-8 md:mt-2" />
            </p>
          </div>
          <div ref={fmRef} className="lg:text-start z-[99] pb-10 md:pb-8" id="fm">
          <Book title="Vibe">
          </Book>
            <p className="text-xl lg:text-5xl text-gray-300">
            Browse our gallery <br /> of moments
  
              <FaArrowRight className="h-10 w-12 md:mt-2 md:h-8 md:w-8" />
            </p>
            
          </div>
        </div>
      </main>
    </div>

  );
}

export default Hero