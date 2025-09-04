import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/doctor.avif";
import slide2 from "../../assets/laboratory.avif";
import slide3 from "../../assets/surgery.avif";
import "../../styles/slider.css";

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
  };

  return (
    <div className="relative w-[90%] h-[70vh] md:h-[90vh] ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[90vh] md:h-[90vh] bg-yellow-400">
          {/* Rounded container */}
          <div className="relative w-full h-full rounded-t-[100px] rounded-b-[100px] overflow-hidden">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white px-4 text-center">
                Announcing $2.5B to Spark Women&apos;s Health Innovations
              </h1>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[90vh] md:h-[90vh] bg-yellow-400">
          {/* Rounded container */}
          <div className="relative w-full h-full rounded-t-[100px] rounded-b-[100px] overflow-hidden">
            <img
              src={slide2}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white px-4 text-center">
                Announcing $2.5B to Spark Women&apos;s Health Innovations
              </h1>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[90vh] md:h-[90vh] bg-yellow-400">
          {/* Rounded container */}
          <div className="relative w-full h-full rounded-t-[100px] rounded-b-[100px] overflow-hidden">
            <img
              src={slide3}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white px-4 text-center">
                Announcing $2.5B to Spark Women&apos;s Health Innovations
              </h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
