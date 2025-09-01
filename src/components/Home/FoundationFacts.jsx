import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const stats = [
  { value: 2167, label: "Employees" },
  { value: 2573, label: "Number of grants" },
  {
    value: 8.0,
    label: "Total charitable support",
    suffix: "B",
    prefix: "$",
    decimals: 1,
  },
  { value: 1507, label: "Grantees" },
  { value: 53, label: "Program strategies" },
];

export default function FoundationFacts() {
  return (
    <section className="py-16 px-6 text-center bg-white">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-800 mb-4 tracking-widest">
        Foundation facts
      </h2>
      <p className="text-gray-600 mb-12 text-base sm:text-lg">
        For the year ended December 31, 2024. Amount in U.S. dollars.
      </p>

      {/* Stats Grid for large screens */}
      <div className="hidden lg:grid grid-cols-5 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-5xl xl:text-6xl text-gray-800 font-light">
              <CountUp
                end={stat.value}
                duration={2.5}
                decimals={stat.decimals || 0}
                suffix={stat.suffix || ""}
                prefix={stat.prefix || ""}
              />
            </h3>
            <p className="text-gray-600 mt-4 font-semibold text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Slider for small/medium screens */}
      <div className="lg:hidden max-w-xs sm:max-w-md mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-3xl sm:text-4xl text-gray-800 font-light">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                  />
                </h3>
                <p className="text-gray-600 mt-3 font-medium text-base sm:text-lg">
                  {stat.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
  .swiper-button-next,
  .swiper-button-prev {
    width: 24px;
    height: 24px;
    color: #4b5563; /* gray-700 */
  }
  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 18px;
      height: 18px;
    }
  }
`}</style>
    </section>
  );
}
