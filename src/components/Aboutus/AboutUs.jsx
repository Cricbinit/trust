import React from "react";
import ImageShape from "../ImageSharp/ImageShape";

const AboutUs = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <ImageShape
          imageUrl="https://cdn.pixabay.com/photo/2025/06/08/16/06/horse-9648183_1280.jpg"
          height={600}
          width={1200}
        />
      </div>
    </div>
  );
};

export default AboutUs;
