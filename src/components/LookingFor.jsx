import React from 'react';
import { Home, Hotel, Building, UserPlus, Search } from 'lucide-react';

const LookingFor = () => {
  const options = [
    { name: 'PG\'s', icon: Building },
    { name: 'Rooms', icon: Home },
    { name: 'Hostels', icon: Hotel },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center text-3xl md:text-4xl font-extrabold text-blue-900 animate-fade-in">
            <div className="mr-5 relative">
            <Search className="w-10 h-10 text-green-500 animate-bounce" />
              <svg className="absolute top-0 left-0 w-10 h-10 animate-ping">
                <circle cx="20" cy="20" r="10" stroke="rgba(52, 211, 153, 0.2)" strokeWidth="4" fill="none" />
              </svg>
            </div>
            I am looking for?
          </div>
          <div className="btn- flex flex-wrap justify-center md:justify-end items-center gap-6">
            {options.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className=" flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
              >
                <Icon className="mr-3" size={28} />
                {name}
              </button>
            ))}
            <button
              className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl border-2 border-white"
            >
              <UserPlus className="mr-3" size={28} />
              I am owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
