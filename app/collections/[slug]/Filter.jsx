"use client";
import React, { useState } from "react";
import ProductType from "./ProductType";
export default function Filter({setGenderfilter="",setPricefilter="",}) {
 const discounts = [
    { id: 50, label: "Flat 50% off on Making Charges" },
    { id: 25, label: "Flat 25% off on Making Charges" },
    { id: 10, label: "Flat 10% off on Making Charges" },
    { id: 20, label: "Up to 20% off on MRP" },
  ];

const initialPriceRanges = [
  { id: 1, label: "Under ₹5,000", value: "under-5000", min: 0, max: 5000 ,count:15},
  { id: 2, label: "₹5,001 - ₹10,000", value: "5001-10000", min: 5001, max: 10000,count:18 },
  { id: 3, label: "₹10,001 - ₹15,000", value: "10001-15000", min: 10001, max: 15000,count:20 },
  { id: 4, label: "₹15,001 - ₹20,000", value: "15001-20000", min: 15001, max: 20000,count:20 },
  { id: 5, label: "₹20,001 - ₹30,000", value: "20001-30000", min: 20001, max: 30000,count:20 },
  { id: 6, label: "₹30,001 - ₹40,000", value: "30001-40000", min: 30001, max: 40000,count:10 },
  { id: 7, label: "₹40,001 - ₹50,000", value: "40001-50000", min: 40001, max: 50000,count:20 },
  { id: 8, label: "₹50,001 - ₹75,000", value: "50001-75000", min: 50001, max: 75000,count:20 },
  { id: 9, label: "₹75,001 - ₹1,00,000", value: "75001-100000", min: 75001, max: 100000,count:14 },
];
 const categoriesPerson = [
    { id: 1735, label: "Women",type:"female" },
    { id: 44, label: "Men" ,type:"male"},
    { id: 36, label: "Baby" ,type:"baby"},
    { id: 102, label: "Kids" ,type:"kid"},
  ];





  return (
    <>
      <div className="flex items-center justify-between    ">
        <h6 className="font-semibold uppercase text-xl ">filters</h6>
        <button className="cursor-pointer" onClick={()=>{
          location.reload()
        }}>Clear All</button>
      </div>

      <hr />


      {/* PriceFilter */}
      <div>
        <h6 className="text-xl font-semibold">Price</h6>
        <ul className="space-y-2 py-4">
      {initialPriceRanges.map((range) => (
        <li key={range.id} className="flex items-center space-x-2">
          <input
            type="radio"
            id={range.value}
            name="range"
            onChange={()=>setPricefilter({min:range.min,max:range.max})}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
           
          />
          <label htmlFor={range.value} className="text-base cursor-pointer">
            {range.label} <span className="text-gray-500">({range.count})</span>
          </label>
        </li>
      ))}
    </ul>
      </div>
      <hr />

      {/* DiscountFilter */}
      <div>
        <h6 className="text-xl font-semibold">Discount</h6>
        <div className="grid grid-cols-1">
      {discounts.map(({ id, label }) => (
        <label key={id} className="flex items-center gap-2 p-2 border-b last:border-0 cursor-pointer">
          <input
            type="radio"
            // checked={selectedDiscounts.includes(id)}
            // onChange={() => handleCheckboxChange(id)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <span className="text-base">{label}</span>
        </label>
      ))}
    </div>
      </div>
      <hr />
          {/* productType  */}
          <div>
        <h6 className="text-xl font-semibold">Product Type</h6>
        <div className="space-y-2 py-4  ">
        <ProductType/>

        </div>
      </div>
      <hr />
      <div>
        <h6 className="text-xl font-semibold">Shop for</h6>
        <div className="space-y-2 py-4  ">
         <div className="grid grid-cols-1">
      <div className="space-y-2">
        {categoriesPerson.map(({ id, label,type }) => (
          <label key={id} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
            name="gender"
              onChange={() => setGenderfilter(type)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">
              {label} <span className="text-gray-500">({id})</span>
            </span>
          </label>
        ))}
      </div>
    </div>
        </div>
      </div>
      
    </>
  );
}
