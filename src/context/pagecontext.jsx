// TabContext.js
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('pg');
  console.log("set active tab", activeTab)
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab && ['pg', 'rooms', 'hostels'].includes(tab.toLowerCase())) {
      setActiveTab(tab.toLowerCase());
    }
  }, []);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);