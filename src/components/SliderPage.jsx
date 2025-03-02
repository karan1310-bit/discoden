'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SliderPage = () => {
  const mainRef = useRef(null);
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      
        // Initial fade-in animation with slight scale effec
        // Timeline for heading animations & video resizing
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 27%",
            end: "top -10%",
            scrub: 2.5,
          },
        });
      
        tl.to(h1Ref.current, { x: -50, ease: "power2.out" }, "anim")
          .to(h2Ref.current, { x: 50, ease: "power2.out" }, "anim")
          .to(videoRef.current, { width: "92%", ease: "power2.out" }, "anim");
      
        // Background color transition on deeper scroll
      
        // Cleanup on unmount
        return () => {
          tl.kill();
        };
      }, []);
      

  return (
    <main ref={mainRef} className="min-h-screen w-full relative bg-black text-white">
      <div className="flex flex-col justify-center md:items-start items-center pt-8 md:pt-16 px-[6vw] tracking-tight">
        <h1 ref={h1Ref} className="text-[2vw] font-medium origin-left md:ml-[12vw] font-neue">
        Step into the rhythm of the night—explore our club gallery 
        </h1>
        <h2 ref={h2Ref} className="text-[2vw] md:ml-[24vw] font-medium font-neue origin-left">
        and relive the electrifying moments that define the experience
        </h2>
      </div>
      <video
        ref={videoRef}
        className="w-[60%] mt-[4vw] rounded-3xl relative left-1/2 transform -translate-x-1/2"
        autoPlay
        muted
        loop
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="h-screen bg-black"></div>
    </main>
  );
};

export default SliderPage;
