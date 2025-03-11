'use client'
import BikePage from "@/components/Bikepage";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PortfolioScroll from "@/components/PortfolioScroll";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const isFirstLoad = sessionStorage.getItem("firstLoadDone");

  useEffect(() => {
    if (!isFirstLoad) {
      // Run preloader
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);

        // Mark first load as done
        sessionStorage.setItem("firstLoadDone", "true");
      }, 2000);
    } else {
      setIsLoading(false);
    }
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
    <div className='min-h-screen bg-black text-white overflow-hidden'>
    <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
    <Hero />
    <PortfolioScroll />
    <Description />
    <BikePage />
    <Footer />
    </div>
  )
}
