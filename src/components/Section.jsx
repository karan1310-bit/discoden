import Image from 'next/image';
import Background from '../../public/medias/6.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='w-[70vw] md:w-[50vw] text-[5vw] md:text-[2vw] md:self-end uppercase mix-blend-difference'>Surrender to heart-pounding bass from avant-garde soundscapes, kaleidoscopic laser storms, and misty fog labyrinths that transform any space into a pulsating dreamscape of limitless fun.</p>
            <p className='text-[5vw] uppercase mix-blend-difference'>Inflate Ignite Transcend</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>
    )
}