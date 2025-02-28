'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "../../public/images/disco.png";

const Hero = () => {
  const sunRef = useRef(null);
  const clubRef = useRef(null);
  const fmRef = useRef(null);

  useEffect(() => {
    // Create a master timeline
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate the sun in (scale & opacity)
    tl.fromTo(
      sunRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1 }
    );

    // Animate the "Club" text (slide in from left)
    tl.fromTo(
      clubRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1 },
      "<0.3"
    );

    // Animate the "FM" text (slide in from right)
    tl.fromTo(
      fmRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1 },
      "<0.3"
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
    <div className="min-h-screen overflow-hidden bg-black text-white flex flex-col font-neue">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <main className="relative flex-grow flex flex-col items-center justify-center font-neue">
        {/* The sun (animated gradient) */}
        <div
          ref={sunRef}
          className="absolute z-[99] w-[66vw] h-[66vw] lg:w-[31vw] lg:h-[31vw] rounded-full flex items-center justify-center mb-16 md:mb-24"
          style={{
            background: "linear-gradient(45deg, #FFA500, #FFD700)",
            boxShadow: "0 0 40px 20px rgba(255, 200, 0.5, 0.2)",
          }}
        >
          <Image src={logo} alt="" className="z-50 w-[66vw] h-[66vw] lg:w-[31vw] lg:h-[31vw] rounded-full"/>
          </div>

        {/* CLUB / FM TEXT */}
        <div className="flex flex-col lg:flex-row md:items-center items-start gap-60 justify-between w-full px-6 lg:px-10 pt-2 lg:pt-56 space-y-10 lg:space-y-0">
          <div ref={clubRef} className="lg:text-start" id="club">
            <h1 className="text-5xl lg:text-[12vw] font-normal">Club</h1>
            <p className="text-xl lg:text-5xl text-gray-300">
              See our program
              <br />
              and come dance{" "}
              <FaArrowRight className="h-10 w-12 md:h-8 md:w-8 md:mt-2" />
            </p>
          </div>
          <div ref={fmRef} className="lg:text-start" id="fm">
            <h1 className="text-5xl lg:text-[12vw] font-normal">FM</h1>
            <p className="text-xl lg:text-5xl text-gray-300">
              Watch live or
              <br />
              browse our archive{" "}
              <FaArrowRight className="h-10 w-12 md:mt-2 md:h-8 md:w-8" />
            </p>
            <span className="text-xs lg:text-sm text-red-400 md:mt-2 block">
              Currently offline
            </span>
          </div>
        </div>
      </main>
    </div>

  );
}

export default Hero