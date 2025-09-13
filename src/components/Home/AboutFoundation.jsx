import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ autoplay module
import "swiper/css";
import Img1 from "../../assets/asset 8.jpeg";
import Img2 from "../../assets/asset 9.jpeg";
import Img3 from "../../assets/asset 10.jpeg";
import Img4 from "../../assets/asset 11.jpeg";
import Img5 from "../../assets/asset 12.jpeg";
import Img6 from "../../assets/asset 13.jpeg";
import Img7 from "../../assets/asset 14.jpeg";
import Img8 from "../../assets/asset 15.jpeg";
import Img9 from "../../assets/asset 18.jpeg";
import Img10 from "../../assets/asset 17.jpeg";
import Img11 from "../../assets/asset 72.jpeg";

export default function AboutFoundation() {
  // Random placeholder images (Pixabay)
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

  return (
    <section className="bg-[#3b2416] text-white  px-6 md:px-16">
      {/* Main Content Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center  h-[90vh]">
        {/* Main Image (static) */}
        <div className="w-full h-auto rounded-lg overflow-hidden flex justify-center">
          <img
            src={Img11}
            alt="main-img"
            className="w-full md:w-[700px] md:h-[500px] h-auto object-cover rounded-4xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center ">
          <h2 className="text-yellow-400 text-xl font-semibold  lg:text-4xl">
            About Dambal Foundation
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-lg">
            It amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Nesciunt iure sunt, veritatis
            suscipit assumenda sed repellat labore consequuntur laudantium,
            tempora quia distinctio officiis. Eos deleniti rem minima possimus
            debitis quod! Id odit possimus obcaecati nulla, quisquam pariatur
            consequatur officia quia? Beatae et, illo distinctio incidunt
            maiores molestias! Doloremque porro quibusdam est possimus itaque
            explicabo, voluptates ducimus autem quis amet. Nostrum!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eveniet veritatis facilis debitis consequatur est officiis accusantium. Asperiores ipsum enim rem nobis laboriosam laborum doloremque ea magni quam non. Provident?
            Tempora aliquid qui non culpa minima autem officia, dolo.
          </p>
        </div>
      </div>

      {/* Thumbnail Slider - Full Width */}
      <div className="pb-5">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000, // 2 sec per slide
            disableOnInteraction: false,
          }}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`thumb-${idx}`}
                className="w-full h-[220px] object-cover rounded-4xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
