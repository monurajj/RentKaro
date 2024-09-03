import React, { useState, useEffect } from 'react';
import { X, Home, Search, User, DollarSign, Phone, MessageCircle, Info, Hotel, Bed } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";

const SidePanel = ({ isOpen, onClose }) => {
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is desktop size
    const checkIsDesktopView = () => {
      setIsDesktopView(window.innerWidth >= 768); // 768px is a common breakpoint for desktop
    };

    // Initial check
    checkIsDesktopView();

    // Add event listener to monitor screen resizing
    window.addEventListener('resize', checkIsDesktopView);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', checkIsDesktopView);
    };
  }, []);

  if (!isDesktopView) {
    return null; // Don't render the side panel if not in desktop view
  }

  const menuItems = [
    { name: 'Find Accommodation', icon: Search },
    { name: 'List Your Property', icon: Home },
    { name: 'For Tenants', icon: User },
    { name: 'For Landlords', icon: DollarSign },
    { name: 'Rooms', icon: Bed },
    { name: 'Hostels', icon: Hotel },
    { name: 'PG Accommodations', icon: Home },
    { name: 'Contact Us', icon: Phone },
    { name: 'Chat Support', icon: MessageCircle },
    { name: 'About Us', icon: Info },
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-40" onClick={handleOverlayClick}></div>
      )}
      <div className={`fixed top-20 right-0 w-1/4 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-green-400">
          <FaUserCircle />
          <p className="text-1xl font-bold text-white">SignIn</p>
          <p className="text-1xl font-bold text-white">Resistor</p>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors duration-150">
            <X size={28} />
          </button>
        </div>
        <nav className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center text-left py-4 px-6 mb-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 group"
            >
              <item.icon className="mr-4 text-gray-400 group-hover:text-blue-500" size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SidePanel;
