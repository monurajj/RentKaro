"use client"
import React, { useEffect, useState } from 'react';
import { Building, Home, Hotel } from 'lucide-react';
import HotelsPgRoomDetails from '@/components/HotelsPgRoomDetails';
import SearchInput from '@/components/searchInput';
import AboutUs from '@/components/AboutUs';
import LookingFor from '@/components/LookingFor';
import data from "../../../data.json";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(data[0].Images);


  const options = [
    { name: 'PG\'s', icon: Building },
    { name: 'Rooms', icon: Home },
    { name: 'Hostels', icon: Hotel },
  ];
  
  const punchlines = [
    "Find Your Perfect Stay with Just One Click",
    "No More Running Around - Book Instantly",
    "Your Comfort, Our Priority - Rooms, Hotels, PGs",
    "Hassle-Free Booking for Your Next Home"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Slideshow container */}
      <div className="w-full relative" style={{ paddingBottom: '20.25%' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-black bg-opacity-40 flex flex-col justify-center items-center md:items-end text-white p-4 md:p-8">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-center md:text-right max-w-sm md:max-w-md">
                {punchlines[index % punchlines.length]}
              </h2>
              <p className="text-base md:text-xl text-center md:text-right max-w-xs md:max-w-md">
                Your one-stop solution for hassle-free accommodation booking.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Looking For section */}
      <div className="w-full bg-blue-100 p-4 md:p-8">
        <LookingFor />
      </div>

      {/* About Us section */}
      <div className="item-center w-full bg-blue-100 p-4 md:p-8">
        <AboutUs />
      </div>
      
    </div>
  );
}