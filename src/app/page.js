'use client'
import BikePage from "@/components/Bikepage";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReview";
import Hero from "@/components/Hero";
import PortfolioScroll from "@/components/PortfolioScroll";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);    
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []); 

  return (
    <main className='min-h-screen bg-black text-white overflow-hidden'>
    <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
    </AnimatePresence>
    <Hero />
    <PortfolioScroll />
    <Description />
    <BikePage />
    <GoogleReviews />
    <Footer />
    </main>
  )
}
