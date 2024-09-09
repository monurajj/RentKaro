"use client";
import HotelsPgRoomDetails from '@/components/HotelsPgRoomDetails';
import { Home, Hotel, Building, UserPlus, Search } from 'lucide-react';
import SearchInput from '@/components/searchInput';
import FilterComponent from '@/components/FilterOptions';
import { useEffect, useState } from 'react';
import data from "../../../../data.json"

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(data[0].Images);
  // console.log(images, "images")
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
      {/*row 1st = Slideshow container */}
      <div className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden">
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

{/* selected options pgs/rooms/hostels */}
<div className="w-full bg-blue-100 py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <Icon className="mr-3" size={24} />
              <span className="text-lg">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>




      {/* Search and Filters */}
      <div className="bg-blue-100 p-4 md:pl-8 md:pr-8">
          <SearchInput></SearchInput>
      </div>
      <div className=" bg-blue-100 p-4 md:pl-8 md:pr-8 ">
          <FilterComponent></FilterComponent>
      </div>

        {/* hotelsPgRoomsDetails */}
      <div className="item-center w-full bg-blue-100 p-4 md:p-8">
        <HotelsPgRoomDetails/>
      </div>
    </div>
  );
}
