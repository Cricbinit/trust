import React from "react";

const InfoSection = () => {
  //bg-[#f9f7f3]
  return (
    <div className="rounded-2xl p-4 sm:p-6 md:p-12 max-w-7xl mx-auto mt-6 sm:mt-10 bg-black">
      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center text-center md:text-left">
        {/* Left Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1661546220316-5a3fdd25641a?w=600&auto=format&fit=crop&q=60"
          alt="Mission"
          className="rounded-lg w-full sm:w-3/4 md:w-full h-52 sm:h-72 md:h-full object-cover mx-auto"
        />

        {/* Right Text */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
            Our mission is to create a world where every person has the
            opportunity to live a healthy, productive life.
          </h2>
          <a
            href="#"
            className="text-yellow-800 underline font-medium mt-3 sm:mt-4 inline-block hover:text-yellow-400"
          >
            Learn more about our role
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
        {/* Left card */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1661546220316-5a3fdd25641a?w=600&auto=format&fit=crop&q=60"
            alt="Work"
            className="rounded-lg w-40 sm:w-48 md:w-40 h-36 sm:h-44 md:h-32 object-cover mx-auto"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Our work
            </h3>
            <p className="text-white text-sm sm:text-base mt-1">
              We work with partners around the world to tackle big challenges
              and improve people’s lives.
            </p>
            <a
              href="#"
              className="text-yellow-800 underline font-medium mt-2 inline-block hover:text-yellow-400"
            >
              Learn more about our work
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&auto=format&fit=crop&q=60"
            alt="Story"
            className="rounded-lg w-40 sm:w-48 md:w-40 h-36 sm:h-44 md:h-32 object-cover mx-auto"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Our story
            </h3>
            <p className="text-white text-sm sm:text-base mt-1">
              For over 25 years, the Gates Foundation has been committed to
              tackling the greatest inequities in our world.
            </p>
            <a
              href="#"
              className="text-yellow-800 underline font-medium mt-2 inline-block hover:text-yellow-400"
            >
              Explore our story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
