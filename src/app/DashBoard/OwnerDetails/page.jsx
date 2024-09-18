"use client";
import React, { useState } from 'react';
import { FaHome, FaMoneyBillWave, FaUsers, FaStar, FaPlus, FaInfoCircle } from 'react-icons/fa';
import AddRoomForm from "../../../components/AddroomForOwner";
import { FaMinus } from "react-icons/fa";
import RoomOwerLandingPage from '../../../components/RoomOwnersLandingPage'

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

  const toggleAddRoomForm = () => {
    setIsAddRoomOpen(prev => !prev);
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Room Owner Portal</h1>
        <p className="text-green-600">Manage your rooms</p>
      </header>
      <div className="mb-4">
        <TabButton active={activeTab === 'registration'} onClick={() => setActiveTab('registration')}>
          Registration
        </TabButton>
        <TabButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
          Show My Properties
        </TabButton>
      </div>

      {activeTab === 'registration' ? (
        <>
          <RoomOwerLandingPage />
        </>
      ) : (
        <Dashboard
          // ownerStats={ownerStats}
          // rooms={rooms}
          onAddRoomClick={toggleAddRoomForm}
          isAddRoomOpen={isAddRoomOpen}
        />
      )}
    </div>
  );
};

export default RoomOwnerPage;
