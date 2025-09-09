import React from "react";

const ImageShape = ({ imageUrl, width, height }) => {
  // Tailwind CSS requires spaces in arbitrary values to be replaced with underscores.
  const clipPathClass =
    "[clip-path:polygon(15%_0%,_85%_0%,_100%_15%,_100%_85%,_85%_100%,_15%_100%,_0%_85%,_0%_15%)]";

  return (
    <div
      className={`bg-cover bg-center shadow-2xl shadow-green-900/50 transition-transform duration-500 ease-in-out  ${clipPathClass}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default ImageShape;
