import React, { useState, useEffect } from "react";
import {
  X,
  Home,
  Search,
  User,
  DollarSign,
  Phone,
  MessageCircle,
  Info,
  Hotel,
  Bed,
  ChevronRight
} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { div } from "framer-motion/client";

const Modal = ({ isOpen, onClose }) => {
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const checkIsDesktopView = () => {
      setIsDesktopView(window.innerWidth >= 768);
    };
    checkIsDesktopView();
    window.addEventListener("resize", checkIsDesktopView);
    return () => {
      window.removeEventListener("resize", checkIsDesktopView);
    };
  }, []);

  if (!isDesktopView || !isOpen) {
    return null;
  }

  const menuItems = [
    { name: "Find Accommodation", icon: Search },
    { name: "List Your Property", icon: Home },
    { name: "For Tenants", icon: User },
    { name: "For Landlords", icon: DollarSign },
    { name: "Rooms", icon: Bed },
    { name: "Hostels", icon: Hotel },
    { name: "PG Accommodations", icon: Home },
    { name: "Contact Us", icon: Phone },
    { name: "Chat Support", icon: MessageCircle },
    { name: "About Us", icon: Info },
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="">
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-end z-50 transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white h-full w-96 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="bg-gradient-to-r from-blue-600 to-green-400 p-6 text-white">
            
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-4xl" />
              <div>
                <button className="font-semibold hover:underline">Sign In</button>
                <span className="mx-2">|</span>
                <button className="font-semibold hover:underline">Register</button>
              </div>
              <div className="flex justify-between items-center">

              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors duration-150"
              >
                <X size={24} />
              </button>
            </div>
            </div>
          </div>
          <nav className="flex-grow overflow-y-auto p-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between text-left py-4 px-4 mb-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 group"
              >
                <div className="flex items-center">
                  <item.icon
                    className="text-gray-400 group-hover:text-blue-500 transition duration-150 ease-in-out mr-4"
                    size={20}
                  />
                  <span className="font-medium group-hover:font-semibold transition duration-150 ease-in-out">
                    {item.name}
                  </span>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-blue-500 transition duration-150 ease-in-out" size={16} />
              </button>
            ))}
          </nav>
          <div className="p-4 bg-gray-100">
            <p className="text-sm text-gray-500 text-center">© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;