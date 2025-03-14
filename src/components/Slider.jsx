"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";

const mediaItems = [
  { type: "image", src: "/medias/1.jpg" },
  { type: "video", src: "/videos/1.mp4" }, // Example video
  { type: "image", src: "/medias/2.jpg" },
  { type: "video", src: "/videos/2.mp4" }, // Another example video
  { type: "video", src: "/videos/3.mp4" },
  { type: "video", src: "/videos/4.mp4" },
];

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.on("slideChangeTransitionStart", () => {
      gsap.to(".swiper-slide-active img, .swiper-slide-active video", { scale: 1.2, opacity: 1, duration: 0.5 });
      gsap.to(".swiper-slide-prev img, .swiper-slide-next img, .swiper-slide-prev video, .swiper-slide-next video", {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.5,
      });
    });
  }, []);

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 select-none">
      <h1 className="text-center font-neue text-3xl mb-12">Gallery</h1>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={10} // Default for small screens
        slidesPerView={1} // Default for small screens
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="w-full h-[350px] md:h-[400px] rounded-sm object-cover"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center px-4 pl-12 sm:pl-6 md:pl-12">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery ${index}`}
                className="rounded-sm object-cover transition-all duration-500 w-[90%] sm:w-[80%] md:w-[90%]"
              />
            ) : (
              <video
                src={item.src}
                className="rounded-sm object-cover transition-all duration-500 w-[90%] sm:w-[80%] md:w-[90%]"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Slider;


