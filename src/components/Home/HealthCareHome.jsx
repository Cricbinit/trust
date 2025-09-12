import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; // ❌ removed Pagination
import "swiper/css";
import "swiper/css/effect-fade";

// Example images
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


export default function HealthCareHome() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

  let [readmore, setReadmore] = useState(false);

  const handleLearnMore = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#2b1b12] text-white justify-start lg:py-20">
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
              <div
                className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] mx-auto rounded-lg bg-center bg-cover bg-no-repeat transition-transform duration-500 scale-95"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h2 className="text-xl md:text-4xl font-semibold text-yellow-500 mb-4">
          HealthCare
        </h2>
        {readmore ? (
          <p className="text-gray-200 leading-relaxed mb-6 lg:text-xl">
            it amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, debitis quo? Fugiat quas id dignissimos iste amet, nostrum, molestias sapiente necessitatibus mollitia natus eligendi consequatur repudiandae, provident cum vitae nam.
          </p>
        ) : (
          <p className="text-gray-200 leading-relaxed mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum
            accusamus quam tempore maiores ab, debitis sit eaque, minus, dolorum
            ipsum nobis delectus! Id corporis dolorem obcaecati in architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia voluptatem eius ducimus, necessitatibus delectus cupiditate culpa molestias eveniet aliquam voluptate pariatur ea provident facere possimus accusamus quos! Dolorum, provident?
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
    </div>
  );
}
