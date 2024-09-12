// LookingFor.js
import React from 'react';
import { Home, Hotel, Building, UserPlus, Search } from 'lucide-react';
import { useTabContext } from '../context/pagecontext';
import Link from 'next/link';

const LookingFor = () => {
  const { activeTab, setActiveTab } = useTabContext();

  const options = [
    { name: 'PG\'s', icon: Building, value: 'pg' },
    { name: 'Rooms', icon: Home, value: 'rooms' },
    { name: 'Hostels', icon: Hotel, value: 'hostels' },
  ];

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
    
    const url = new URL(window.location);
    url.searchParams.set('tab', tabValue);
    window.history.pushState({}, '', url);
  };

  const OptionButton = ({ name, icon: Icon, value, isOwner }) => (
    <Link
      onClick={() => handleTabChange(value)}
      href={isOwner ? "/DashBoard/OwnerDetails" : "/DashBoard/AllRooms"}


      className={`flex items-center px-8 py-4 bg-gradient-to-r 
        ${isOwner ? 'from-blue-400 to-blue-500 hover:bg-blue-600' : 'from-green-400 to-green-500 hover:bg-green-600'}
        ${activeTab === value ? 'ring-4 ring-white' : ''}
        text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl 
        ${isOwner ? 'border-2 border-white' : ''}`}
    >
      <Icon className="mr-3" size={28} />
      {name}
    </Link>
  );

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
            {options.map(({ name, icon, value }) => (
              <OptionButton key={value} name={name} icon={icon} value={value} />
            ))}
            <OptionButton name="I am owner" icon={UserPlus} value="owner" isOwner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;