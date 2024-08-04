"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { data } from "@/data/testimonials";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="py-4 text-white  px-3">
      <div className="flex items-center justify-center mb-10 flex-col  gap-3 ">
        <span className="p-1 sm:text-5xl xs:text-3xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
          Testimonials
        </span>
        <p className="md:text-lg text-md text-center md:px-24 line-clamp-3 text-gray-200 mb-12">
          We believe that the best way to understand the quality of our work is
          through the experiences of those who have worked with us. Here`s what
          some of our clients have to say:
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="md:h-[50vh] xs:h-[35vh]"
        breakpoints={{
          960: {
            slidesPerView: 2,
          },
        }}
        
      >
        <div className="">
          {data.map((test) => {
            return (
              <SwiperSlide key={test.id}>
                <div className="text-white w-full h-full">
                  <div className=" flex items-center gap-4 ">
                    <Image
                      src={test.src}
                      width={500}
                      height={500}
                      alt="testImg"
                      className="md:w-32 md:h-32 xs:w-24 xs:h-24 object-cover rounded-full p-4"
                    />
                    <div>
                      <h1 className="sm:text-lg xs:text-md">{test.name}</h1>
                      <p className="sm:text-sm xs:text-xs text-neutral-300">
                        {test.job}
                      </p>
                    </div>
                  </div>
                  <div className="text-center py-5 px-4">
                    <p className="md:text-md xs:text-sm line-clamp-3">{test.body}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
