'use client';
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture2 from '../../public/services/dj1.png';
import Picture1 from '../../public/services/dj.jpg';
import Image from "next/image";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger) 

const images = [
    {
      src: Picture1,
      className: "h-[55vh] md:h-[80vh] w-[40vh] md:w-[70vh] z-[1]",
    },
    {
      src: Picture2,
      className: "left-[26vw] md:left-[55vw] top-[40vh] md:h-[60vh] md:w-[45vh] h-[45vh] w-[33vh] z-[2]",
    },
  ];

const Services6 = () => {

    const container = useRef(null);
    const lettersRef = useRef([])
    const imagesRef = useRef([])
    const title1 = useRef(null);
    useLayoutEffect( () => {
        const context = gsap.context( () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
            .to(title1.current, {y: -5}, 0)
            .to(imagesRef.current[1], {y: -150}, 0)
            .to(imagesRef.current[2], {y: -255}, 0)
            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0)
            })
            
        })
        return () => context.revert();
    }, [])

  return (
    <div ref={container} className="container min-h-screen font-neue lg:mb-[4vh]">
            <div className="body px-6 md:px-12">
                <h1 className="m-0 mt-[10px] mb-3 text-2xl md:text-4xl leading-none uppercase" ref={title1}>Professional DJ: </h1>
                <Button link= "book" title="Book now" containerClass="border-[1px] border-white overflow-hidden rounded-full px-4 py-3 md:px-7 md:py-3" textClass="text-sm md:text-xl"></Button>
            </div>
            <div className="images flex justify-center relative mt-[5vh] md:mt-[2vh]">
                {
                    images.map( (image, i) => {
                        return <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className={`absolute ${image.className}`}>
                            <Image 
                                className="object-cover w-full h-full"
                                src={image.src}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </div>
                    })
                }
            </div>
        </div>
  )
}

export default Services6