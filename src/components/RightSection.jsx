import React from "react";
import cs from "../assets/cs.jpg"

const RightSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-grey-800 overflow-hidden">
            <div className="relative">
              <img 
                src={cs}
                alt="Computer Science Jobs"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  Top Computer Science Jobs for Freshers in India
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The rapid evolution of technology has created immense opportunities for fresh computer science graduates....
                </p>
                <a href="#" className="text-blue-700 text-xl  font-bold hover:underline">Read more</a>
              </div>
            </div>
          </div>
    
  );
};

export default RightSection;
