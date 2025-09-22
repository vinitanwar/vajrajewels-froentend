// "use client";
// import React, { useState } from "react";
// import { ImCross } from "react-icons/im";


// import Link from "next/link";
// import data from "../data";

// export default function SearchProduct({ setSearchToogle }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="fixed inset-0 z-[9999999999999999999] bg-black/50 flex items-center justify-center">
//       {/* Search Box */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 ">
//       <div className="flex items-center justify-between">
//       <h2 className="text-lg font-semibold">Search jewellery </h2>
//           <button onClick={() => setSearchToogle(false)} className="font-bold cursor-pointer"><ImCross  /></button>

//       </div>
//         <input
//           type="text"
//           placeholder="Search for a product..."
//           className="w-full border p-2 mt-3 rounded outline-none focus:ring focus:ring-blue-300"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {searchTerm && 
//           <ul className="w-full h-[250px] overflow-y-auto space-y-4 mt-4">
//           {data
//             .filter((elm) =>
//               elm.title
//                 .toLowerCase()
//                 .split(" ")
//                 .join("-")
//                 .includes(searchTerm.toLowerCase().split(" ").join("-"))
//             )
//             .map((elm, index) => (
//               <li key={index}>
//                 <Link
//                   onClick={() => setSearchToogle(false)}
//                   href={`/product/${elm.title
//                     .toLowerCase()
//                     .replace(/,/g, "")
//                     .split(" ")
//                     .join("-")}`}
//                 >
//                   {" "}
//                   {elm.title}
//                 </Link>
//               </li>
//             ))}
//         </ul>}

      

//         <button
//           onClick={() => setSearchToogle(false)}
//           className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import data from "../data";

export default function SearchProduct({ setSearchToogle }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center">
      {/* Search Box */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full md:w-96 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Search Jewellery</h2>
          <button
            onClick={() => setSearchToogle(false)}
            className="text-gray-600 hover:text-black transition"
          >
            <ImCross />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for a product..."
            className="w-full border border-gray-300 p-3 pl-10 rounded-lg outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition"
            >
              <MdClose size={18} />
            </button>
          )}
        </div>

        {/* Search Results */}
        {searchTerm && (
          <ul className="w-full h-[250px] overflow-y-auto space-y-3 mt-4 border-t pt-3">
            {data
              .filter((elm) =>
                elm.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")
                  .includes(searchTerm.toLowerCase().split(" ").join("-"))
              )
              .map((elm, index) => (
                <li key={index} className="hover:bg-gray-100 rounded-md p-2">
                  <Link
                    onClick={() => setSearchToogle(false)}
                    href={`/product/${elm.title
                      .toLowerCase()
                      .replace(/,/g, "")
                      .split(" ")
                      .join("-")}`}
                    className="block text-gray-800 hover:text-black transition"
                  >
                    {elm.title}
                  </Link>
                </li>
              ))}
          </ul>
        )}

        {/* Close Button */}
        <button
          onClick={() => setSearchToogle(false)}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
