import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ autoplay module
import "swiper/css";

export default function AboutFoundation() {
  // Random placeholder images (Pixabay)
  const images = [
    "https://cdn.pixabay.com/photo/2024/04/08/14/00/buildings-8683532_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/28/20/43/girls-8418210_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/04/08/14/00/buildings-8683532_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_1280.jpg",
  ];

  // Static main image (always first one)
  const [mainImage] = useState(images[0]);

  return (
    <section className="bg-[#3b2416] text-white py-12 px-6 md:px-16">
      {/* Main Content Row */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Main Image (static) */}
        <div className="w-full h-[350px] rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt="main-img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-yellow-400 text-2xl font-bold mb-4 lg:text-4xl">
            About Dambal Foundation
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-lg">
            It amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Thumbnail Slider - Full Width */}
      <div className="mt-8">
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
                className="w-full h-[220px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
