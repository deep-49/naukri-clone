import React from "react";
import profile from "../assets/profile.jpg";

const LeftSection = () => {
  return (

    <div className="bg-white rounded-lg border border-grey-800 shadow-md p-6 text-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" >
      <img
        src={profile}
        alt="Profile"
        className="w-full h-full object-cover"
      />
      </div>
      
      <h2 className="text-xl font-bold mb-2">Build your profile</h2>
      <p className="text-gray-500 mb-4">Get access to personalised career guidance</p>
      <div className=" flex justify-center ">
        <button className="w-[180px] m-1 py-2 px-4 border border-blue-700 text-blue-700 font-semibold rounded-3xl hover:bg-blue-50 transition-colors">
          Log in
        </button>
        <button className="w-[180px] m-1 py-2 px-4 bg-red-500 font-normal text-white rounded-3xl hover:bg-red-600 transition-colors">
          Register
        </button>
      </div>
    </div>
  );
};

export default LeftSection;