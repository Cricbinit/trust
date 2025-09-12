import React, { useState } from "react";
import Img1 from "../../assets/asset 18.jpeg";
import Video from "../../assets/BBS REEL WITH VOICEOVERS (1).mp4";

export default function ProfileSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fdf8f0]">
      {/* Inner container */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 p-6 md:p-12 ">
        {/* Left: Video Section */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
          {!isPlaying ? (
            <>
              <img
                src={Img1}
                alt="Siddharth Dambal"
                className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  onClick={handlePlay}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer
                    transition-all duration-300 transform
                    hover:scale-110 hover:animate-pulse bg-red-950"
                >
                  <svg
                    className="w-5 h-5 md:w-10 md:h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <video
              src={Video}
              controls
              autoPlay
              className="w-full h-[400px] rounded-lg transition-opacity duration-500 opacity-0 animate-fadeIn"
              onCanPlay={(e) => e.currentTarget.classList.remove("opacity-0")}
            />
          )}
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 h-[450px] flex justify-start items-start flex-col">
          <h2 className="text-2xl md:text-5xl font-serif mb-4">
            Siddharth Dambal
          </h2>
          <p className="text-gray-700 leading-relaxed lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure{" "}
            <span className="text-orange-500">dolor in reprehenderit in</span>{" "}
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ipsa pariatur,
            ad mollitia voluptates esse repellendus cum aperiam odit porro
            impedit. Architecto, dolorem ea? Iure nulla molestias corrupti porro
            aut deleniti!
          </p>
        </div>
      </div>
    </div>
  );
}
