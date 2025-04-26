"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiVipLine } from "react-icons/ri";
import { FaCameraRetro } from "react-icons/fa";
import { GiMusicalNotes, GiBalloons, GiSofa } from "react-icons/gi";
import { CiHome } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  { id: 1, title: "AIR CLUB", icon: <CiHome className="text-8xl bg-transparent" />, description: "Revolutionize your nights with inflatable nightclub pulsating light shows, booming sound, and a wild, portable party vibe that transforms any space into an electrifying dance haven!",bgImage: "/home/den.jpg", },
  { id: 2, title: "360 VIDEO BOOTH", icon: <FaCameraRetro className="text-8xl bg-transparent" />, description: "Capture every moment in 360 degrees, offering a unique and immersive video experience for your event.",bgImage: "/home/360.jpg", },
  { id: 3, title: "VIP ZONE", icon: <RiVipLine className="text-8xl bg-transparent" />, description: "A luxurious and exclusive area designed for premium guests, offering comfort and special privileges.",bgImage: "/home/vip.jpg" },
  { id: 4, title: "Professional DJ", icon: <GiMusicalNotes className="text-8xl bg-transparent" />, description: "Experience high-energy music and entertainment with a skilled DJ spinning the best tracks all night long.",bgImage: "/home/djj.jpg" },
  { id: 5, title: "LED FURNITURE", icon: <GiSofa className="text-8xl bg-transparent" />, description: "Modern and stylish LED-lit furniture that enhances the ambiance and adds a vibrant glow to your event.",bgImage: "/home/led.jpg" },
  { id: 6, title: "BALLOON DECOR", icon: <GiBalloons className="text-8xl bg-transparent" />, description: "Stunning balloon decorations that bring color, joy, and a festive atmosphere to any celebration.",bgImage: "/home/b.jpg" },
];

const PortfolioScroll = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useGSAP(() => {
    const containerWidth = horizontalRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const animation = gsap.to(horizontalRef.current, {
      x: () => -(containerWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${containerWidth - viewportWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      animation.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black py-12 md:py-0">
      {/* Scrolling Content */}
      <div ref={horizontalRef} className="flex md:flex-row flex-col items-center md:gap-10 gap-6 h-auto md:h-screen px-6 md:px-20">
        {projects.map((project) => (
          <Link key={project.id} href="/services">
          <div
          
          className="project-box relative flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[40vw] h-[45vh] md:h-[70vh] border-[1px] border-white rounded-[48px] overflow-hidden shadow-xl flex items-center justify-center text-center transition-all ease-in duration-300 hover:bg-yellow-400 hover:text-black"
          
        >
          <Image
    src={project.bgImage}
    alt={project.title}
    fill
    className="object-cover"
    priority={false} // set to true only for above-the-fold items
  />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />
        
          {/* Icon & Text Content */}
          <div className="relative z-10 bg-transparent p-4 md:p-6 text-white">
            <div className="flex bg-transparent justify-center items-center w-full mb-4">{project.icon}</div>
            <h2 className="text-2xl bg-transparent md:text-3xl font-bold">{project.title}</h2>
            {project.description && (
              <p className="mt-2 md:mt-4 bg-transparent text-base md:text-lg">{project.description}</p>
            )}
          </div>
        </div></Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioScroll;
