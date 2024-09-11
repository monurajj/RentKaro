"use client";
import HotelsPgRoomDetails from '@/components/HotelsPgRoomDetails';
import SearchInput from '@/components/searchInput';
import { useEffect, useState } from 'react';
import data from "../../data.json"

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(data[0].Images);

  

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
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      I am not adding any thing in it
    </div>
  );
}
