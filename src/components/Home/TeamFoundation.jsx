import React from "react";
import Img1 from "../../assets/asset 8.jpeg";
import Img2 from "../../assets/asset 9.jpeg";
import Img3 from "../../assets/asset 10.jpeg";
import Img4 from "../../assets/asset 11.jpeg";
import Img5 from "../../assets/asset 12.jpeg";
import Img6 from "../../assets/asset 13.jpeg";
import Img7 from "../../assets/asset 14.jpeg";
import Img8 from "../../assets/asset 15.jpeg";
import Img9 from "../../assets/asset 18.jpeg";

export default function TeamFoundation() {
   const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];
 

  return (
    <section className="bg-[#2b1912] text-white py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text Section */}
        <div>
          <h2 className="text-yellow-400 text-2xl md:text-4xl font-bold mb-6">
            Team Dambal Foundation
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-lg text-justify">
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cum tempore in quia debitis incidunt totam pariatur quo. Illum sit adipisci dolorum, a repellendus obcaecati animi quaerat nam temporibus tempora.
            Libero ab mollitia necessitatibus delectus dicta blanditiis consectetur eius voluptates accusamus quam aspernatur nemo sit, doloremque beatae eveniet qui animi nam. Consequuntur ex eligendi perspiciatis dicta expedita labore. Consectetur, quisquam?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nostrum at voluptate.
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full aspect-square  overflow-hidden bg-black flex justify-center items-center h-[190px]"
            >
              <img
                src={img}
                alt={`img-${idx}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
