import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import Img1 from "../assets/doctor.jpg";
import Img2 from "../assets/laboratory.jpg";
import Img3 from "../assets/surgery.jpg";

const slides = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
];

let  HeroSlider =() =>{
  const [current, setCurrent] = useState(0);

  // Autoplay fade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Social Icons + Vertical Line */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 text-white text-xl z-20">
        <div className="h-12 w-[1px] bg-white"></div>
        <FaPhoneAlt />
        <FaEnvelope />
        <FaYoutube />
        <FaInstagram />
        <FaTwitter />
        <div className="h-12 w-[1px] bg-white"></div>
      </div>

      {/* Slides with Fade */}
      <div className="h-full w-full relative">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide.img} alt="" className="w-full h-full object-cover " />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>

            {/* Two horizontal lines */}
            <div className="absolute left-1/4 right-1/4 top-1/3 h-[2px] bg-white"></div>
            <div className="absolute left-1/4 right-1/4 top-2/3 h-[2px] bg-white"></div>
          </div>
        ))}
      </div>

      {/* Dots Right */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-6 rounded-full ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider
