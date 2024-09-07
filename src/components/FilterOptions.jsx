import React, { useState } from 'react';
import { FaFilter, FaMoneyBillWave, FaUsers, FaHotel, FaBed, FaHome } from 'react-icons/fa';
import { Slider, Checkbox } from './UI/sliderchekbox';

const FilterOption = ({ icon: Icon, label, children }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center mb-2">
      <Icon className="text-green-600 mr-2" />
      <h2 className="text-gray-700 font-semibold">{label}</h2>
    </div>
    {children}
  </div>
);

const PriceFilter = ({ price, setPrice }) => (
  <FilterOption icon={FaMoneyBillWave} label="Price">
    <Slider
      min={1000}
      max={40000}
      step={10}
      value={price}
      onValueChange={setPrice}
    />
    <div className="flex justify-between mt-2">
      <span>₹{price[0]}</span>
      <span>₹{price[1]}</span>
    </div>
  </FilterOption>
);

const OccupancyFilter = ({ occupancy, setOccupancy }) => (
  <FilterOption icon={FaUsers} label="Occupancy">
    <Slider
      min={1}
      max={10}
      step={1}
      value={[occupancy]}
      onValueChange={(value) => setOccupancy(value[0])}
    />
    <div className="text-center mt-2">
      {occupancy} {occupancy === 1 ? 'person' : 'people'}
    </div>
  </FilterOption>
);

const FacilitiesFilter = ({ facilities, setFacilities }) => (
  <FilterOption icon={FaHotel} label="Facilities">
    {['WiFi', 'AC', 'TV', 'Parking', 'Gym'].map((facility) => (
      <div key={facility} className="flex items-center mt-2">
        <Checkbox
          id={facility}
          checked={facilities.includes(facility)}
          onCheckedChange={(checked) => {
            if (checked) {
              setFacilities([...facilities, facility]);
            } else {
              setFacilities(facilities.filter(f => f !== facility));
            }
          }}
        />
        <label htmlFor={facility} className="ml-2 text-sm text-gray-700">
          {facility}
        </label>
      </div>
    ))}
  </FilterOption>
);

const FilterComponent = () => {
  const [price, setPrice] = useState([0, 5000]);
  const [occupancy, setOccupancy] = useState(1);
  const [facilities, setFacilities] = useState([]);

  return (
    <div className="bg-gray-100 text-black p-4 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          <FaFilter className="text-green-600" />
          <h1 className="text-gray-700 font-semibold ml-2">Filter By</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PriceFilter price={price} setPrice={setPrice} />
        <OccupancyFilter occupancy={occupancy} setOccupancy={setOccupancy} />
        <FacilitiesFilter facilities={facilities} setFacilities={setFacilities} />
      </div>
    </div>
  );
};

export default FilterComponent;