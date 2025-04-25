'use client'
import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-b3c26a07-fc5b-4222-84fa-3951fc4622f3" data-elfsight-app-lazy></div>
  );
};

const BikePage = () => {
  return (
      <>
      <div className='flex items-center justify-between mb-12 px-6 md:px-12'>
        <h2 className="text-3xl md:text-5xl font-bold">FOLLOW US</h2>
        <div className="flex items-center justify-center"> 
          <a
            href="https://www.instagram.com/discoden_airclub?igsh=ZDk2aTgxMmxubW1l"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-3 md:px-6 md:py-3 text-sm md:text-lg font-neue font-light rounded-lg text-white transition-all ease-in duration-300 hover:bg-yellow-400 hover:text-black"
          >
            GO TO FEED
          </a>
        </div></div>
      <div className="mt-6 md:mt-10 px-8 md:px-12 bg-transparent">
        <InstagramFeed />
      </div>
      </>
  );
};

export default BikePage;