'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: 'Jem Morey',
    position: '1 Mill Street',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      "Our previous website wasn't cutting it. It was outdated, the user experience was poor, and not aligned with our recent brand refresh.",
  },
  {
    name: 'Jack Bradley',
    position: 'Leicestershire County Cricket Club',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    review:
      'Thanks for helping create a fantastic website for Leicestershire County Cricket Club. It is pushing the limits of what an interactive club website can be.',
  },
  {
    name: 'Emma Watson',
    position: 'Digital Marketer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Yellow Panther transformed our website into a modern, fast, and engaging platform that aligns perfectly with our brand identity.',
  },
  {
    name: 'Emma',
    position: 'Digital Marketer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Yellow Panther transformed our website into a modern, fast, and engaging platform that aligns perfectly with our brand identity.',
  },
  {
    name: 'Jack Bradley',
    position: 'Leicestershire County Cricket Club',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    review:
      'Thanks for helping create a fantastic website for Leicestershire County Cricket Club. It is pushing the limits of what an interactive club website can be.',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-black text-white mt-12 px-6 md:px-20 min-h-fit">
      <h2 className="text-3xl md:text-7xl font-bold uppercase text-left text-gray-100">
        Testimonials
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-700 p-6 rounded-lg flex flex-col justify-between h-[350px] md:h-[400px] lg:h-[450px]">
              <div className="flex-grow flex flex-col">
                <p className="text-gray-300 text-lg flex-grow">{testimonial.review}</p>
              </div>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-500"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <div className="text-5xl text-gray-500 font-bold mt-4">&#8221;</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
