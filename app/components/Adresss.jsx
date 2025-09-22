import axios from "axios";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { baseurl } from "./utils/apis";

export default function Addresss({ address }) {


    const deleteAddress= async(id)=>{
        const response = await axios.get(`${baseurl}/deleteaddress/${id}`,{withCredentials:true})

        const data = await response.data;
 
        if(data.success){
            location.reload();
        }
    }




    


  return (
   <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 rounded-xl shadow-lg border border-yellow-600 mb-6 text-gray-200">
  {/* Header */}
  <div className="flex items-center justify-between border-b border-yellow-700 pb-3 mb-4">
    <div className="flex items-center gap-2">
      <FaUserAlt className="text-yellow-400" />
      <h2 className="font-semibold text-yellow-300">
        {address.first_name} {address.last_name}
      </h2>
    </div>
    {address.selectAddress === 1 && (
      <span className="text-xs bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow">
        Default
      </span>
    )}
  </div>

  {/* Address Body */}
  <div className="space-y-2 text-sm">
    <p className="flex items-start gap-2">
      <FaMapMarkerAlt className="text-yellow-400 mt-1" />
      <span>
        {address.house_no}, {address.address}, {address.landmark},{" "}
        {address.city}, {address.state} - {address.postcode},{" "}
        {address.country}
      </span>
    </p>
    <p className="flex items-center gap-2">
      <FaPhoneAlt className="text-yellow-400" />
      <span>{address.phone}</span>
    </p>
    <p className="flex items-center gap-2">
      📧 <span>{address.email}</span>
    </p>
    {address.order_notes && (
      <p className="flex items-center gap-2">
        📝 <span>{address.order_notes}</span>
      </p>
    )}
  </div>

  {/* Actions */}
  <div className="flex justify-end gap-3 mt-6">
    <button
      onClick={() => deleteAddress(address.id)}
      className="px-4 py-2 bg-red-600 rounded-lg text-white font-semibold shadow hover:bg-red-700 transition"
    >
      Delete
    </button>
  </div>
</div>

  );
}
