import React, { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { MdNearMe } from 'react-icons/md';
import { useSearch } from '../context/filterContext';

const SearchInput = ({ onSearch }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex items-center h-14 px-4 rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
          {/* <FaSearchLocation className="text-gray-400" /> */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, hotel, or pincode..."
            className="flex-1 ml-3 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
          >
            <MdNearMe className="mr-1" />
            <span className="text-sm font-medium">Near Me</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;