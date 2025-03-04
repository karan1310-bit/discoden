'use client';
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../../public/medias/1.jpg';
import Picture2 from '../../public/medias/2.jpg';
import Picture3 from '../../public/medias/3.jpg';
import Image from "next/image";
import Book from "./Book";

gsap.registerPlugin(ScrollTrigger) 

const images = [
    {
      src: Picture1,
      className: "h-[60vh] md:h-[70vh] w-[50vh] md:w-[70vh] z-[1]",
    },
    {
      src: Picture2,
      className: "left-[45vw] md:left-[55vw] top-[15vh] md:h-[50vh] md:w-[40vh] h-[35vh] w-[30vh] z-[2]",
    },
    {
      src: Picture3,
      // Third image: left 27.5vw, top 40vh, height 25vh, width 20vh, z-index 3
      className: "left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] md:h-[35vh] md:w-[30vh] z-[3]",
    },
  ];

const Services = () => {

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
            .to(title1.current, {y: -42}, 0)
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
    <div ref={container} className="container min-h-screen font-neue ">
            <div className="body ml-[10vw]">
                <h1 className="m-0 mt-[10px] text-[3vw] leading-none uppercase" ref={title1}>Air Club Package Starting At:</h1>
                <Book title="Book now"></Book>
            </div>
            <div className="images flex justify-center relative mt-[5vh]">
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

export default Services