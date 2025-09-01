import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/doctor.avif";
import slide2 from "../../assets/laboratory.avif";
import slide3 from "../../assets/surgery.avif";
import "../../styles/slider.css"

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: dots => (
      <div className="!m-0 absolute top-1/2 right-4 -translate-y-1/2">
        <ul className="flex flex-col gap-3">{dots}</ul>
      </div>
    ),
   
  };

  return (
    <div className="relative w-[90%] h-[90vh] mx-auto">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[90vh]">
          <img
            src={slide1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl text-center">
              Announcing $2.5B to Spark Women&apos;s Health Innovations
            </h1>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[90vh]">
          <img
            src={slide2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Another Announcement Text Here
            </h1>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[90vh]">
          <img
            src={slide3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Another Announcement Text Here
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
