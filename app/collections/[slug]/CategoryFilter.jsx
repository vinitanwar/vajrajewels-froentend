"use client"
import { useState } from "react";

const CategoryFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoriesPerson = [
    { id: 1735, label: "Women" },
    { id: 44, label: "Men" },
    { id: 36, label: "Baby" },
    { id: 102, label: "Kids" },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1">
      <div className="space-y-2">
        {categoriesPerson.map(({ id, label }) => (
          <label key={id} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCategories.includes(id)} // Fixed issue here
              onChange={() => handleCheckboxChange(id)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">
              {label} <span className="text-gray-500">({id})</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
