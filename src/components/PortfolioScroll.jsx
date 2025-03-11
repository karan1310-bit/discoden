"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiVipLine } from "react-icons/ri";
import { FaCameraRetro } from "react-icons/fa";
import { GiMusicalNotes, GiBalloons, GiSofa } from "react-icons/gi";
import { TbNumber21Small } from "react-icons/tb";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  { id: 1, title: "360 VIDEO BOOTH", icon: <FaCameraRetro className="text-8xl" />, description: "Capture every moment in 360 degrees, offering a unique and immersive video experience for your event." },
  { id: 2, title: "VIP ZONE", icon: <RiVipLine className="text-8xl" />, description: "A luxurious and exclusive area designed for premium guests, offering comfort and special privileges." },
  { id: 3, title: "Professional DJ", icon: <GiMusicalNotes className="text-8xl" />, description: "Experience high-energy music and entertainment with a skilled DJ spinning the best tracks all night long." },
  { id: 4, title: "LED FURNITURE", icon: <GiSofa className="text-8xl" />, description: "Modern and stylish LED-lit furniture that enhances the ambiance and adds a vibrant glow to your event." },
  { id: 5, title: "BALLOON DECOR", icon: <GiBalloons className="text-8xl" />, description: "Stunning balloon decorations that bring color, joy, and a festive atmosphere to any celebration." },
  { id: 6, title: "MARQUEE NUMBERS", icon: <TbNumber21Small className="text-8xl" />, description: "Giant illuminated marquee numbers that create the perfect backdrop for memorable photos and event decor." },
];

const PortfolioScroll = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!horizontalRef.current || !containerRef.current) return;

      const updateScrollAnimation = () => {
        const containerWidth = horizontalRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.to(horizontalRef.current, {
          x: () => -(containerWidth - viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${containerWidth - viewportWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true, // Ensures smooth resizing
          },
        });
      };

      updateScrollAnimation();
      window.addEventListener("resize", updateScrollAnimation);

      return () => {
        window.removeEventListener("resize", updateScrollAnimation);
      };
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black pb-10 mt-12 md:mt-0">
      {/* Scrolling Content */}
      <div ref={horizontalRef} className="flex md:flex-row flex-col items-center md:gap-10 gap-6 h-auto md:h-screen px-6 md:px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-box flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[40vw] h-[52vh] md:h-[70vh] relative border-[1px] border-white rounded-[48px] overflow-hidden shadow-xl flex flex-col items-center justify-center bg-zinc-950 p-6 md:p-0 text-center transition-all ease-in duration-300 hover:bg-yellow-400 hover:text-black"
          >
            {/* Icon Display */}
            <div className="flex justify-center items-center w-full mb-4">{project.icon}</div>

            {/* Card Content */}
            <div className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
              {project.description && <p className="mt-2 md:mt-4 text-base md:text-lg">{project.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioScroll;
