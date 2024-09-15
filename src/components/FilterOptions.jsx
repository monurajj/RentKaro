import React, { useState, useEffect } from 'react';
import { FaFilter, FaMoneyBillWave, FaUsers, FaHotel, FaSortAmountDown, FaSortAmountUp, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { Slider, Checkbox } from './UI/sliderchekbox';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '../context/filterContext';

const FilterOption = ({ icon: Icon, label, children, isMobile, onClose }) => {
      
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsOpen(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsOpen(false);
      }
    };
  
  
    return (
      <div 
        className="bg-white p-4 rounded-lg shadow mb-4 h-min"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center justify-between cursor-pointer flex-grow"
          >
            <div className="flex items-center">
              <Icon className="text-green-600 mr-2" />
              <h2 className="text-gray-700 font-semibold">{label}</h2>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaSortAmountDown className="text-gray-500" />
            </motion.div>
          </div>
          {isMobile && (
            <button 
              onClick={onClose} 
              className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FaTimes size={16} />
            </button>
          )}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="mt-4"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
const PriceFilter = () => {
  const { price, setPrice } = useSearch();
  return (
    <FilterOption icon={FaMoneyBillWave} label="Price">
      <Slider
        min={1000}
        max={40000}
        step={10}
        value={price}
        onValueChange={setPrice}
      />
      <div className="flex justify-between mt-2">
        <span>Under <span className='font-semibold'> ₹{price[0]} </span> /per month</span>
      </div>
    </FilterOption>
  );
};

const OccupancyFilter = () => {
  const { occupancy, setOccupancy } = useSearch();
  return (
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
};

const FacilitiesFilter = () => {
  const { facilities, setFacilities } = useSearch();
  return (
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
};

const SortingOptions = () => {
  const { sortOrder, setSortOrder } = useSearch();
  return (
    <FilterOption icon={sortOrder ? FaSortAmountUp : FaSortAmountDown} label="Sort by Price">
      <div className="flex justify-between mt-2">
        <button
          className={`px-3 py-1 rounded ${!sortOrder ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSortOrder(false)}
        >
          Low to High
        </button>
        <button
          className={`px-3 py-1 rounded ${sortOrder ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSortOrder(true)}
        >
          High to Low
        </button>
      </div>
    </FilterOption>
  );
};

const StateFilter = () => {
  const { selectedStates, setSelectedStates } = useSearch();
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <FilterOption icon={FaMapMarkerAlt} label="State">
      <div className="mt-2 h-40 overflow-y-auto pr-2">
        {indianStates.map((state) => (
          <div key={state} className="flex items-center mt-2">
            <Checkbox
              id={state}
              checked={selectedStates.includes(state)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedStates([...selectedStates, state]);
                } else {
                  setSelectedStates(selectedStates.filter(s => s !== state));
                }
              }}
            />
            <label htmlFor={state} className="ml-2 text-sm text-gray-700">
              {state}
            </label>
          </div>
        ))}
      </div>
    </FilterOption>
  );
};


const MobileFilterModal = ({ isOpen, onClose, children }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-start"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            className="bg-white h-full w-4/5 max-w-md p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters & Sorting</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={24} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

const FilterComponent = () => {
  const { setPrice, setOccupancy, setFacilities, setSortOrder, setSelectedStates } = useSearch();
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilters, setActiveFilters] = useState(['price', 'occupancy', 'facilities', 'sort', 'state']);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const clearAllFilters = () => {
    setPrice('');
    setOccupancy(1);
    setFacilities([]);
    setSortOrder(false);
    setSelectedStates([]);
    setActiveFilters(['price', 'occupancy', 'facilities', 'sort', 'state']);
  };

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const filterContent = (
    <>
      {activeFilters.includes('state') && (
        <StateFilter 
          isMobile={isMobile}
          onClose={() => removeFilter('state')}
        />
      )}
      {activeFilters.includes('price') && (
        <PriceFilter 
          isMobile={isMobile}
          onClose={() => removeFilter('price')}
        />
      )}
      {activeFilters.includes('occupancy') && (
        <OccupancyFilter 
          isMobile={isMobile}
          onClose={() => removeFilter('occupancy')}
        />
      )}
      {activeFilters.includes('facilities') && (
        <FacilitiesFilter 
          isMobile={isMobile}
          onClose={() => removeFilter('facilities')}
        />
      )}
      {activeFilters.includes('sort') && (
        <SortingOptions 
          isMobile={isMobile}
          onClose={() => removeFilter('sort')}
        />
      )}
    </>
  );

  return (
    <div className="bg-blue-100 text-black p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaFilter className="text-green-600" />
          <h1 className="text-gray-700 font-semibold ml-2">Filter and Sort</h1>
        </div>
        {isMobile ? (
          <button
            onClick={() => setIsMobileModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Open Filters
          </button>
        ) : (
          <button
            onClick={clearAllFilters}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Clear All Filters
          </button>
        )}
      </div>
      {isMobile ? (
        <MobileFilterModal isOpen={isMobileModalOpen} onClose={() => setIsMobileModalOpen(false)}>
          {filterContent}
          <button
            onClick={() => {
              clearAllFilters();
              setIsMobileModalOpen(false);
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out mt-4"
          >
            Clear All Filters
          </button>
        </MobileFilterModal>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filterContent}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;