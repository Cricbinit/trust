import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
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
import Girl from "../../assets/girl.jpg"

export default function AboutFoundation() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

  return (
    <section className="bg-[#3b2416] text-white px-6 md:px-16 py-10 md:py-16">
      {/* Main Content Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Main Image */}
        <div className="w-full flex justify-center">
          <img
            src={Girl}
            alt="main-img"
            className="w-full sm:w-[90%] md:w-[700px] rounded-3xl object-cover max-h-[300px] md:max-h-[450px] h-[450px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4 lg:text-4xl">
            About Dambal Foundation
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-lg max-h-[300px] md:max-h-none overflow-y-auto md:overflow-visible px-1 md:px-0 text-justify">
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
            explicabo, voluptates ducimus autem quis amet. Nostrum! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Aperiam eveniet
            veritatis facilis debitis consequatur est officiis accusantium.
            Asperiores ipsum enim rem nobis laboriosam laborum doloremque ea
            magni quam non. Provident? Tempora aliquid qui non culpa minima
            autem officia, dolo.
          </p>
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className="mt-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`thumb-${idx}`}
                className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
