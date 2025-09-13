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

export default function EducationHome() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
  let [readmore, setReadmore] = useState(false);

  const handleLearnMore = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-[#2b1b12] text-white  lg:py-22">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mt-2.5">
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
            officia deserunt mollit anim id est laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, consectetur temporibus pariatur nam alias deleniti eaque illo atque facere velit mollitia! Facere aperiam eligendi magnam repellat magni natus quis at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio aut dicta atque repudiandae officia possimus nihil sit voluptatum debitis iusto explicabo voluptas quas omnis dolore, tempora quisquam? Saepe, blanditiis!
            Consectetur repellat ab neque eaque quasi quibusdam placeat perspiciatis possimus. Eos eaque maiores, molestias aut ut atque modi. Doloremque, quis. Dicta laborum aperiam aspernatur fuga facilis aliquam distinctio dolore ratione.
          </p>
        ) : (
          <p className="text-gray-200 leading-relaxed mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum
            accusamus quam tempore maiores ab, debitis sit eaque, minus, dolorum
            ipsum nobis delectus! Id corporis dolorem obcaecati in architecto
            vel Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quasi amet aliquam recusandae, fugit laboriosam blanditiis, ex facilis facere architecto, veniam adipisci dolorem natus deserunt quo! Quia excepturi quam beatae. ?........
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
              <div
                className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] mx-auto rounded-lg bg-center bg-cover bg-no-repeat transition-transform duration-500 scale-95"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
