import React from "react";

export default function TeamFoundation() {
  const images = [
    "https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/02/07/11/43/pumpkin-9389840_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/02/07/11/43/pumpkin-9389840_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_1280.jpg",
  ];

  return (
    <section className="bg-[#2b1912] text-white py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-6">
            Team Dambal Foundation
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            it amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum it amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full aspect-square rounded-lg overflow-hidden bg-black flex justify-center items-center"
            >
              <img
                src={img}
                alt={`img-${idx}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
