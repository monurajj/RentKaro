import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, Users, Calendar, Clock, DollarSign, Wifi, Tv, Dumbbell, Coffee, Award, ChevronLeft, ChevronRight, Phone, User, Home, Shield, Utensils, ShoppingCart, Bus, Hospital, CreditCard, Gift, FileText } from 'lucide-react';
import { FaRegSnowflake } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";


const RoomDetails = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [room.Images.Link01, room.Images.Link02];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const savings = parseInt(room.TotalPrice) - parseInt(room.ActualPrice);
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{room.Name}</h1>
      
      <div className="flex flex-wrap -mx-2 mb-6">
        <div className="w-full md:w-2/3 px-2 mb-4">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image 
              src={images[currentImageIndex]} 
              alt={`${room.Name} - Image ${currentImageIndex + 1}`} 
              layout="fill" 
              objectFit="cover"
            />
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-2 sticky top-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4 text-sm border-b border-green-300 pb-2">
              <div className="flex-1 border-r border-green-300 pr-2">
                <p className="text-gray-600">Room Type</p>
                <p className="font-semibold">{room.RoomType}</p>
              </div>
              <div className="flex-1 pl-2">
                <p className="text-gray-600">Occupancy</p>
                <p className="font-semibold">{room.Occupancy} Person</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-2xl font-bold text-green-600">₹{room.ActualPrice} <span className="text-sm text-gray-500">/ month</span></p>
              <p className="text-red-500 line-through">₹{room.TotalPrice}</p>
              <p className="text-green-600">{room.TotalDiscount}% off</p>
            </div>

            <div className="flex mb-4 p-2 bg-blue- rounded-lg gap-4 right-8">
              <p className="text-gray-600">Total Savings:</p>
              <p className="font-semibold text-blue-600 text-lg">₹{savings}</p>
            </div>

            <button className="btn-1 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Book Now</button>
          </div>
        </div>

      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Room Details</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Users className="w-5 h-5 mr-2 text-green-500" /> {room.RoomType} ({room.Occupancy} person)</li>
            <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-green-500" /> {room.Address}, {room.City}, {room.State}</li>
            <li className="flex items-center"><Star className="w-5 h-5 mr-2 text-green-500" /> {room.Rating} ({room.TotalRating} ratings)</li>
            <li className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-green-500" /> Available from {room.AvailableFrom}</li>
            <li className="flex items-center"><Clock className="w-5 h-5 mr-2 text-green-500" /> Minimum stay: {room.MinimumStay}</li>
            <li className="flex items-center"><Home className="w-5 h-5 mr-2 text-green-500" /> Floor: {room.Facilities.FloorNo} of {room.Facilities.TotalFloors}</li>
            <li className="flex items-center"><Shield className="w-5 h-5 mr-2 text-green-500" /> Security: {room.Facilities.SecurityCharges}</li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Facilities</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Wifi className={`w-5 h-5 mr-2 ${room.OtherFacilities.FreeWifi === "Yes" ? "text-green-500" : "text-red-500"}`} /> Free WiFi: {room.OtherFacilities.FreeWifi}</li>
            <li className="flex items-center"><Tv className={`w-5 h-5 mr-2 ${room.OtherFacilities.TV === "Yes" ? "text-green-500" : "text-green-500"}`} /> TV: {room.OtherFacilities.TV}</li>
            <li className="flex items-center"><Dumbbell className={`w-5 h-5 mr-2 ${room.OtherFacilities.Gym === "Yes" ? "text-green-500" : "text-green-500"}`} /> Gym: {room.OtherFacilities.Gym}</li>
            <li className="flex items-center"><Coffee className={`w-5 h-5 mr-2 ${room.OtherFacilities.Cafeteria === "Yes" ? "text-green-500" : "text-green-500"}`} /> Cafeteria: {room.OtherFacilities.Cafeteria}</li>
            <li className="flex items-center"><Award className="w-5 h-5 mr-2 text-green-500" /> Furnishing: {room.Facilities.Furnishing}</li>
            <li className="flex items-center"><FaRegSnowflake className="w-5 h-5 mr-2 text-green-500" /> AC: {room.OtherFacilities.AC}</li>
            <li className="flex items-center"><GiElevator className="w-5 h-5 mr-2 text-green-500" /> Elevator: {room.OtherFacilities.Elevator}</li>

          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Description</h2>
          <p className="text-gray-700">{room.Description}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Policies</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>{room.Policies.RoomLeavingCriteria}</li>
            <li>{room.Policies.GuestPolicy}</li>
            <li>{room.Policies.PetPolicy}</li>
            <li>{room.Policies.SmokingPolicy}</li>
            <li>{room.Policies.CancellationPolicy}</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Owner Details</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><User className="w-5 h-5 mr-2 text-green-500" /> {room.OwnerName}</li>
            <li className="flex items-center"><Phone className="w-5 h-5 mr-2 text-green-500" /> {room.OwnerContacts}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Nearby Amenities</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Utensils className="w-5 h-5 mr-2 text-green-500" /> Restaurants: {room.NearbyAmenities.Restaurants}</li>
            <li className="flex items-center"><ShoppingCart className="w-5 h-5 mr-2 text-green-500" /> Supermarket: {room.NearbyAmenities.Supermarket}</li>
            <li className="flex items-center"><Bus className="w-5 h-5 mr-2 text-green-500" /> Public Transport: {room.NearbyAmenities.PublicTransport}</li>
            <li className="flex items-center"><Hospital className="w-5 h-5 mr-2 text-green-500" /> Hospital: {room.NearbyAmenities.Hospital}</li>
            <li className="flex items-center"><CreditCard className="w-5 h-5 mr-2 text-green-500" /> Bank/ATM: {room.NearbyAmenities.BankATM}</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Special Offers</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Gift className="w-5 h-5 mr-2 text-green-500" /> Long Term Discount: {room.SpecialOffers.LongTermDiscount}</li>
            <li className="flex items-center"><Gift className="w-5 h-5 mr-2 text-green-500" /> Early Bird Discount: {room.SpecialOffers.EarlyBirdDiscount}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Virtual Tour</h2>
          <p className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-green-500" />
            <a href={room.VirtualTour} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Take a virtual tour
            </a>
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {room.Reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-blue-600">{review.UserName}</p>
                <p className="text-sm text-gray-500">{review.Date}</p>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.Rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700">{review.Comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;