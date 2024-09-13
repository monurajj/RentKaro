import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, Home, Search, User, DollarSign, Phone, MessageCircle, Info, Hotel, Bed } from 'lucide-react';

const SidePanel = ({ isOpen, onClose }) => {
  const panelRef = useRef(null);
  const menuItems = [
    { id: 'find-accommodation', name: "Find Accommodation", icon: Search, href: "/DashBoard/AllRooms" },
    { id: 'list-property', name: "List Your Property", icon: Home, href: "/DashBoard/OwnerDetails" },
    // { id: 'for-tenants', name: "For Tenants", icon: User, href: "/tenants" },
    // { id: 'for-landlords', name: "For Landlords", icon: DollarSign, href: "/landlords" },
    // { id: 'rooms', name: "Rooms", icon: Bed, href: "/DashBoard?tab=rooms" },
    // { id: 'hostels', name: "Hostels", icon: Hotel, href: "/hostels" },
    // { id: 'pg-accommodations', name: "PG Accommodations", icon: Home, href: "/pg-accommodations" },
    { id: 'contact-us', name: "Contact Us", icon: Phone, href: "#contactUs" },
    { id: 'chat-support', name: "Chat Support", icon: MessageCircle, href: "#contactUs" },
    { id: 'about-us', name: "About Us", icon: Info, href: "#aboutUs" },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div 
        ref={panelRef}
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-green-400">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md">
              <User size={24} />
            </div>
            <div className="text-white">
              <Link href={'/Authentication/Login'} className="hover:underline font-semibold transition-all duration-200 ease-in-out">Sign In</Link>
              <span className="mx-2">|</span>
              <Link href={'/Authentication/signup'} className="hover:underline font-semibold transition-all duration-200 ease-in-out">Register</Link>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow overflow-y-auto py-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block w-full"
              onClick={onClose}
            >
              <div className="flex items-center text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 gap-4">
                <item.icon className="mr-4 h-6 w-6 text-blue-500" />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidePanel;