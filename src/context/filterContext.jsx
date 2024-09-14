// SearchContext.js
"use client"
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStates, setSelectedStates] = useState([])
    const [facilities, setFacilities] = useState([])
    const [occupancy, setOccupancy] = useState('')
    const [sortOrder, setSortOrder] = useState(false)
    const [price, setPrice] = useState('')

    //   console.log(searchQuery, "searchInput")
      console.log(price, "pricefilter")
      console.log(sortOrder, "order")
      console.log(occupancy, "occupancy")
      console.log(facilities, "facilities")
      console.log(selectedStates, 'selectedstate')

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, 
            price, setPrice,
            occupancy, setOccupancy,
            facilities, setFacilities,
            sortOrder, setSortOrder,
            selectedStates, setSelectedStates,
         }}>
            {children}
        </SearchContext.Provider>
    );
};
  
  export const useSearch = () => useContext(SearchContext);