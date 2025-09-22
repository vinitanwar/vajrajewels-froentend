"use client";

import React, { useState } from "react";

const Description = ({description,details,return_policy,shipping}) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="w-full max-w-screen-2xl mx-auto px-10  md:px-12 xl:px-32">
            <div className="flex  overflow-x-auto border-b text-xl font-semibold">
                {["description", "additional-info", "reviews"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 text-nowrap py-4 text-lg md:text-2xl ${activeTab === tab
                                ? "border-b-4 border-orange-500 text-black"
                                : "text-gray-600"
                            }`}
                    >
                        {tab === "description"
                            ? "Description"
                            : tab === "additional-info"
                                ? "Additional Information"
                                : "Reviews"}
                    </button>
                ))}
            </div>

            <div className="py-6 text-lg md:text-2xl">
                {activeTab === "description" && (
                    <div>

                        <p className="mt-4 text-justify text-lg text-gray-600 " dangerouslySetInnerHTML={{__html:description}}>
                           
                        </p>

                        <h3 className="font-bold text-xl mt-6">Details</h3>
                        <ul className="list-disc pl-6 text-lg text-gray-600">
                            {details?.map((item,index)=><li key={index}>{item}</li>)}

                        </ul>
                    </div>
                )}

                {activeTab === "additional-info" && (
                    <div>
                        

                        <h3 className="font-bold text-xl mt-6">Returns Policy</h3>
                        <div className="text-lg text-gray-600 ">
                       {return_policy}
                        </div>
                           

                            <h3 className="font-bold text-xl mt-6 important">Shipping</h3>
                            <p className="text-lg text-gray-600">
                               {shipping}
                            </p>
                            
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div>
                        

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6">
                            <div className="flex items-center">
                                <span className="text-orange-500 text-3xl">★★★★☆</span>
                                <p className="ml-2 text-lg">4.00 out of 5</p>
                            </div>
                            <div className="mt-4 flex flex-col md:flex-row justify-between">
                            <div className="text-lg">
                                <p>★★★★★ <span className="ml-2">0</span></p>
                                <p>★★★★☆ <span className="ml-2">1</span></p>
                                <p>★★★☆☆ <span className="ml-2">0</span></p>
                                <p>★★☆☆☆ <span className="ml-2">0</span></p>
                                <p>★☆☆☆☆ <span className="ml-2">0</span></p>
                            </div>
                        </div>
                            <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-lg">
                                Write a Review
                            </button>
                        </div>

                       

                        <div className="mt-6 border-t pt-4">
                            <h3 className="font-bold text-xl">Most Recent</h3>

                            <div className="mt-4 border-b pb-4">
                                <div className="flex items-center">
                                    <span className="text-orange-500 text-xl">★★★★☆</span>
                                    <p className="ml-2 font-bold">Stetson</p>
                                </div>
                                <h4 className="font-bold text-lg mt-2">Sit amet luctus venenatis</h4>
                                <p className="text-gray-600 text-lg">
                                    Amet volutpat consequat mauris nunc. Ultrices gravida dictum
                                    fusce ut placerat orci nulla pellentesque. Blandit massa enim
                                    nec dui nunc mattis. Bibendum neque egestas congue quisque
                                    facilisi cras fermentum odio eu feugiat pretium nibh.
                                </p>
                            </div>
                            <div className="mt-4 border-b pb-4">
                                <div className="flex items-center">
                                    <span className="text-orange-500 text-xl">★★★★☆</span>
                                    <p className="ml-2 font-bold">James</p>
                                </div>
                                <h4 className="font-bold text-lg mt-2">Sit amet luctus venenatis</h4>
                                <p className="text-gray-600 text-lg">
                                    Amet volutpat consequat mauris nunc. Ultrices gravida dictum
                                    fusce ut placerat orci nulla pellentesque. Blandit massa enim
                                    nec dui nunc mattis. Bibendum neque egestas congue quisque
                                    facilisi cras fermentum odio eu feugiat pretium nibh.
                                </p>
                            </div>
                            <div className="mt-4 border-b pb-4">
                                <div className="flex items-center">
                                    <span className="text-orange-500 text-xl">★★★★★</span>
                                    <p className="ml-2 font-bold">Daren</p>
                                </div>
                                <h4 className="font-bold text-lg mt-2">Sit amet luctus venenatis</h4>
                                <p className="text-gray-600 text-lg">
                                    Amet volutpat consequat mauris nunc. Ultrices gravida dictum
                                    fusce ut placerat orci nulla pellentesque. Blandit massa enim
                                    nec dui nunc mattis. Bibendum neque egestas congue quisque
                                    facilisi cras fermentum odio eu feugiat pretium nibh.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Description;
