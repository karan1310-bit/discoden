"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const mediaItems = [
  { type: "image", src: "/medias/1.jpg" },
  { type: "video", src: "/videos/1.mp4" },
  { type: "image", src: "/medias/2.jpg" },
  { type: "video", src: "/videos/2.mp4" },
  { type: "video", src: "/videos/3.mp4" },
  { type: "video", src: "/videos/4.mp4" },
];

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    const animateSlides = () => {
      gsap.to(".swiper-slide-active img, .swiper-slide-active video", {
        scale: 1.1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(
        ".swiper-slide-prev img, .swiper-slide-next img, .swiper-slide-prev video, .swiper-slide-next video",
        {
          scale: 0.95,
          opacity: 0.5,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    };

    animateSlides(); // run once initially
    swiper.on("slideChangeTransitionStart", animateSlides);
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-6 md:px-12 select-none">
      <h1 className="text-center font-neue text-3xl mb-12">Gallery</h1>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="w-full rounded-md h-[350px] md:h-[650px]"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center px-4 sm:px-6 md:px-12">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery image ${index}`}
                fill
                sizes="(max-width: 768px) 80vw, 33vw"
                className="rounded-md object-cover transition-all duration-500 h-full w-[100%] sm:w-[100%] md:w-[100%]"
                priority={index === 0} // preload first image
              />
            ) : (
              <video
                src={item.src}
                className="rounded-md object-cover transition-all duration-500 h-full w-[100%] sm:w-[100%] md:w-[100%]"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;



