"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import data from '../../data.json'
import aboutpageimage01 from "../assets/aboutpageiamge01.png"
import aboutpageimage02 from "../assets/aboutpageimage02.jpeg"
import aboutpageimage03 from "../assets/aboutpageimage03.jpeg"
import aboutpageimage04 from "../assets/aboutpageimage04.jpeg"
import aboutpageimage05 from "../assets/aboutpageiamge05.jpeg"
// import aboutpageimage06 from "../assets/aboutpageimage06.jpeg"


const SlideshowAboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  
  // const aboutPageData = data.find(item => item.id === "AboutpageImage");
  // const images = aboutPageData ? Object.values(aboutPageData.Images) : [];

  const images = [aboutpageimage01, aboutpageimage02, aboutpageimage03, aboutpageimage04, aboutpageimage05]
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-auto h-[50vh] md:h-[40vh] relative overflow-hidden group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === currentImageIndex 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform ' + 
                (direction === 'next' ? 'translate-x-full' : '-translate-x-full')
            }`}
        >
          <Image
            src={image}
            alt={`About Us Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        &#10094;
      </button>
      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        &#10095;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideshowAboutPage;