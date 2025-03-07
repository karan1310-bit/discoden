"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images properly (Replace with actual paths if using Next.js)
import teamGbImage from "../../public/medias/8.jpg";
import premierPadelImage from "../../public/medias/7.jpg";
import wildDateImage from "../../public/medias/6.jpg";
import wildDateImg from "../../public/medias/4.jpg";
import wildDate from "../../public/medias/5.jpg";

// Project data with correct image imports
const projects = [
  {
    id: 1,
    title: "TEAM GB",
    image: teamGbImage,
  },
  {
    id: 2,
    title: "PREMIER PADEL",
    image: premierPadelImage,
    description:
      "We service the world's biggest padel tour ",
  },
  {
    id: 3,
    title: "WILD DATE",
    image: wildDateImage,
  },
  {
    id: 4,
    title: "WILD DATE",
    image: wildDateImg,
    description:
    "We service the world's biggest padel tour ",
  },
  {
    id: 5,
    title: "WILD DATE",
    image: wildDate,
  },
{
    id: 7,
    title: "TEAM GB",
    image: teamGbImage,
  },
];

const PortfolioScroll = () => {
    const containerRef = useRef(null);
    const horizontalRef = useRef(null);
  
    useEffect(() => {
      gsap.to(horizontalRef.current, {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Ensures smooth resizing
        },
      });
    }, []);
  
    return (
      <div ref={containerRef} className="relative w-full overflow-hidden bg-black pb-10">
        {/* Scrolling Content */}
        <div ref={horizontalRef} className="flex items-center gap-10 h-screen px-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-box flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[40vw] h-[75vh] md:h-[70vh] relative rounded-3xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${project.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
  
              {/* Card Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white p-5">
                <h2 className="text-3xl font-bold">{project.title}</h2>
                {project.description && (
                  <p className="mt-4 text-lg">{project.description}</p>
                )}
                {project.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white text-black rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PortfolioScroll;