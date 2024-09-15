"use client";
import React, { useState } from 'react';
import { FaHome, FaMoneyBillWave, FaUsers, FaStar, FaPlus, FaInfoCircle } from 'react-icons/fa';
import AddRoomForm from "../../../components/AddroomForOwner";
import { FaMinus } from "react-icons/fa";

const TabButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 font-semibold rounded-t-lg ${
      active ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold text-gray-700">{value}</p>
      </div>
      <Icon className="text-green-500 text-3xl" />
    </div>
  </div>
);

const RoomCard = ({ room }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-700">{room.name}</h3>
    <p className="text-gray-500">{room.type}</p>
    <div className="mt-2 flex justify-between items-center">
      <p className="text-green-600 font-semibold">₹{room.price}/per month</p>
      <div className="flex items-center">
        <FaStar className="text-yellow-400 mr-1" />
        <span>{room.rating}</span>
      </div>
    </div>
  </div>
);

const RegistrationForm = () => (
  <form className="bg-white p-6 rounded-lg shadow-md text-black">
    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Register as a Room Owner</h2>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Full Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="John Doe"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="john@example.com"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="tel"
        placeholder="+91 1234567890"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
        Property Address
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        placeholder="Enter your property address"
        rows="3"
      ></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Register
      </button>
    </div>
  </form>
);

const PolicyInfo = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-black">
    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Room Owner Policies</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>All room owners must comply with local zoning and housing regulations.</li>
      <li>Owners are responsible for maintaining clean and safe accommodations for guests.</li>
      <li>A service fee of 3% will be deducted from each booking.</li>
      <li>Owners must respond to booking requests within 24 hours.</li>
      <li>Cancellation policies must be clearly stated in the room listing.</li>
    </ul>
  </div>
);

const Dashboard = ({ ownerStats, rooms, onAddRoomClick, isAddRoomOpen }) => (
  <>

    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-800">Your Rooms</h2>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center"
          onClick={onAddRoomClick}
        >
          {isAddRoomOpen ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
          {isAddRoomOpen ? 'Close Form' : 'Add New Room'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* Conditionally render the AddRoomForm component */}
      {isAddRoomOpen && (
        <div className="mt-6">
          <AddRoomForm />
        </div>
      )}
    </div>
  </>
);

const RoomOwnerPage = () => {
  const [activeTab, setActiveTab] = useState('registration');
  const [isAddRoomOpen, setIsAddRoomOpen] = useState(false);

  const ownerStats = {
    totalRooms: 15,
    occupiedRooms: 12,
    totalEarnings: '₹45,000',
    averageRating: 4.7,
  };

  const rooms = [
    { id: 1, name: 'Deluxe Suite 101', type: 'Suite', price: 30000, rating: 4.8 },
    { id: 2, name: 'Standard Room 201', type: 'Standard', price: 15000, rating: 4.5 },
    { id: 3, name: 'Family Room 301', type: 'Family', price: 25000, rating: 4.9 },
  ];

  const toggleAddRoomForm = () => {
    setIsAddRoomOpen(prev => !prev);
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Room Owner Portal</h1>
        <p className="text-green-600">Register or manage your rooms</p>
      </header>

      <div className="mb-4">
        <TabButton active={activeTab === 'registration'} onClick={() => setActiveTab('registration')}>
          Registration
        </TabButton>
        <TabButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
          Dashboard
        </TabButton>
      </div>

      {activeTab === 'registration' ? (
        <>
          <RegistrationForm />
          <PolicyInfo />
        </>
      ) : (
        <Dashboard
          // ownerStats={ownerStats}
          rooms={rooms}
          onAddRoomClick={toggleAddRoomForm}
          isAddRoomOpen={isAddRoomOpen}
        />
      )}
    </div>
  );
};

export default RoomOwnerPage;
