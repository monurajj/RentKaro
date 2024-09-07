import React from 'react';

export const Slider = ({ min, max, step, value, onValueChange }) => {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    onValueChange([newValue]);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export const Checkbox = ({ id, checked, onCheckedChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
      />
    </div>
  );
};