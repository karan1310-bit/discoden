'use client'
import Hero from "@/components/Hero";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout( () => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0,0);
    }, 2500)
},[])

  return (
    <>
    <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
    <Hero />
    </>
  )
}
