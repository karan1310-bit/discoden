'use client'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Portable Dance Club Experiences That Turn Ordinary Moments Into Extraordinary Memories!"

export default function Description() {

    let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top 40%`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p className="text-[9vw] md:text-[3.5vw] font-neue uppercase text-center max-w-[70vw] md:max-w-[50vw] leading-none" key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span className='opacity-10' key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

    return (
        <div ref={container} className="flex justify-center items-center mt-12 mb-32">
        <div ref={body} className="overflow-hidden">
            {
          splitWords(phrase)
        }
        </div>
      </div>
    );
}