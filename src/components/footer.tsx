import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '../assets/Logo.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src={logoImage} 
                alt="Rentkaro Logo" 
                className="h-20 w-20 rounded-[50%]"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Rentkaro</h3>
            <p className="text-sm">
              Simplifying the process of finding and booking accommodations. Your one-stop solution for rooms, hostels, and PGs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/DashBoard/OwnerDetails" className="hover:text-green-200">Home</a></li>
              <li><a href="/DashBoard/AllRooms" className="hover:text-green-200">Search Rooms</a></li>
              <li><a href="/DashBoard/OwnerDetails" className="hover:text-green-200">List Your Property</a></li>
              <li><a href="/DashBoard#aboutUs" className="hover:text-green-200">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>support@rentkaro.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>131001 RU university , sonipat Haryana</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" target='blank' className="hover:text-green-200">
                <Facebook size={24} />
              </a>
              <a href="#" target='blank' className="hover:text-green-200">
                <Twitter size={24} />
              </a>
              <a href="#" target='blank' className="hover:text-green-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/30 text-center">
          <p>&copy; 2024 Rentkaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;