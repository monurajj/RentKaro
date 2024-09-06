"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import data from '../../data.json'

const SlideshowAboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetching about page data
  const aboutPageData = data.find(item => item.id === "AboutpageImage");
  console.log('Fetched aboutPageData:', aboutPageData);
  
  // Extracting images array
  const images = aboutPageData ? Object.values(aboutPageData.Images) : [];
  console.log('Images array:', images);

  useEffect(() => {
    if (images.length === 0) {
      console.log('No images available for the slideshow');
      return;
    }
    
    // Set up image slideshow interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        console.log(`Switching to image index: ${newIndex}`);
        return newIndex;
      });
    }, 1000);

    // Clean up interval on component unmount
    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, [images.length]);

  console.log('Current image index:', currentImageIndex);

  return (
    <div className="w-auto h-[50vh] md:h-[40vh] relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={image}
              alt={`About Us Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideshowAboutPage;



