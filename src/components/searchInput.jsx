import React, { useState } from 'react';
import { FaSearchLocation, FaFilter, FaMoneyBillWave, FaUsers, FaBed, FaHotel, FaHome } from 'react-icons/fa';
import { MdNearMe } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FilterOption = ({ icon: Icon, label }) => (
  <button
    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
    aria-label={`Filter by ${label}`}
  >
    <Icon className="text-green-600" />
    <span>{label}</span>
    <RiArrowDropDownLine className="text-gray-400" size={20} />
  </button>
);

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement your search logic here
  };

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex items-center h-14 px-4 rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
          <FaSearchLocation className="text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by city, hotel, or pincode..."
            className="flex-1 ml-3 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="button"
            className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
          >
            <MdNearMe className="mr-1" />
            <span className="text-sm font-medium">Near me</span>
          </button>
        </div>
      </form>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <FaFilter className="text-green-600" />
          <h1 className="text-gray-700 font-semibold ml-2">Filter By</h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <FilterOption icon={FaMoneyBillWave} label="Price" />
          <FilterOption icon={FaUsers} label="Occupancy" />
          <FilterOption icon={FaHotel} label="Hostels" />
          <FilterOption icon={FaBed} label="Rooms" />
          <FilterOption icon={FaHome} label="PG's" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
