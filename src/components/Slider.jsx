"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/medias/1.jpg",
  "/medias/2.jpg",
  "/medias/3.jpg",
  "/medias/1.jpg",
  "/medias/2.jpg",
  "/medias/3.jpg",
];

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.on("slideChangeTransitionStart", () => {
      gsap.to(".swiper-slide-active img", { scale: 1.2, opacity: 1, duration: 0.5 });
      gsap.to(".swiper-slide-prev img, .swiper-slide-next img", {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.5,
      });
    });
  }, []);

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 mt-12 select-none">
      <h1 className="text-center font-neue text-3xl mb-12">Gallery</h1>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={10} // Default for small screens
        slidesPerView={1} // Default for small screens
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3, // Original styling for md+
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center px-4 pl-12 sm:pl-6 md:pl-12"
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="rounded-3xl object-cover transition-all duration-500 w-[90%] sm:w-[80%] md:w-[90%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Slider;


