import React, { useState, useEffect } from 'react';

const PhoneCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/public/assets/images/screenshot1-2x.png',
    '/public/assets/images/screenshot2-2x.png',
    '/public/assets/images/screenshot3-2x.png',
    '/public/assets/images/screenshot4-2x.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src="/public/assets/images/home-phones-2x.png"
        alt="Instagram phones"
        className="w-full h-auto"
      />
      <div className="absolute top-[3.8%] right-[11.8%] w-[55.2%] h-[86%] overflow-hidden rounded-3xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Screenshot ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneCarousel;