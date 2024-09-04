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
} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
  const [isDesktopView, setIsDesktopView] = useState(false);

  // Check if the view is desktop or not
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
    return null; // Don't render the modal if not in desktop view or if not open
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
    <>
      {isOpen && (
        <div
          className="absolute fixed right-0 inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-end z-40 "
          onClick={handleOverlayClick}
        >
          <div
            className={`bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out rounded-tl-[2rem] rounded-bl-[2rem] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex gap-4 justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-tl-[8rem]">
              <FaUserCircle className="text-white text-2xl" />
              <p className="text-2xl font- text-white">Sign In</p>
              <p className="text-2xl font- text-white">Register</p>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors duration-150"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="p-6 overflow-y-auto h-screen">
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <button className="w-full flex items-center text-left py-4 px-6 mb-4 mt-4 text-gray-700 gap-4 hover:bg-gradient-to-r hover:from-blue-100 hover:to-green-100 hover:text-blue-600 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 group">
                    <item.icon
                      className="text-gray-400 group-hover:text-blue-500 transition duration-150 ease-in-out"
                      size={20}
                    />
                    <span className="font-medium group-hover:font-bold transition duration-150 ease-in-out">
                      {item.name}
                    </span>
                  </button>
                  {index !== menuItems.length - 1 && (
                    <hr className="my-4 border-gray-200" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
