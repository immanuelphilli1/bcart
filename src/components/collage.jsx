import React from 'react';

const images = [
  // Add arrays of image URLs here for each row
  ['url1', 'url2', 'url3'], // Row 1
  ['url4', 'url5', 'url6'], // Row 2
  // Repeat for more rows
];

const Collage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl lg:text-8xl font-bold z-10">
        Welcome to Our Page
      </h1>
      {images.map((row, index) => (
        <div
          key={index}
          className={`absolute w-full flex space-x-4 ${
            index % 2 === 0 ? 'animate-scrollLeft' : 'animate-scrollRight'
          }`}
          style={{
            top: `${(index * 25)}%`, // Adjust based on the number of rows
          }}
        >
          {row.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Collage Image ${index}-${idx}`}
              className="h-1/4 w-auto"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Collage;
