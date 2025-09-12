import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; // ❌ removed Pagination
import "swiper/css";
import "swiper/css/effect-fade";

// Example images
import Img1 from "../../assets/doctor.jpg";
import Img2 from "../../assets/laboratory.jpg";
import Img3 from "../../assets/surgery.jpg";

export default function EducationHome() {
  const images = [Img1, Img2, Img3];
  let [readmore, setReadmore] = useState(false);

  const handleLearnMore = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-[#2b1b12] text-white">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-xl md:text-4xl font-semibold text-yellow-500 mb-4">
          Education
        </h2>
        {readmore ? (
          <p className="text-gray-200 leading-relaxed mb-6 lg:text-xl">
            it amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        ) : (
          <p className="text-gray-200 leading-relaxed mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum
            accusamus quam tempore maiores ab, debitis sit eaque, minus, dolorum
            ipsum nobis delectus! Id corporis dolorem obcaecati in architecto
            vel?........
          </p>
        )}
        <button
          onClick={handleLearnMore}
          className="flex gap-2 text-yellow-500 font-semibold hover:underline justify-end"
        >
          <span className="border-b border-yellow-500 w-8"></span>{" "}
          {readmore ? "learn less" : "learn more"}
        </button>
      </div>

      {/* Right: Image Slider */}
      <div className="w-full md:w-1/2 relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="w-4/5 md:w-3/4 mx-auto h-auto object-cover rounded-lg scale-95 transition-transform duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
