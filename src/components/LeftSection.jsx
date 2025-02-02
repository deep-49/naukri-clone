import React from "react";

const LeftSection = () => {
  return (

    <div className="bg-white rounded-lg border border-grey-800 shadow-md p-6 text-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">Build your profile</h2>
      <p className="text-gray-500 mb-4">Get access to personalised career guidance</p>
      <div className="space-y-3">
        <button className="w-[180px] m-1 py-2 px-4 border border-blue-700 text-blue-700 font-semibold rounded-3xl hover:bg-blue-50 transition-colors">
          Log in
        </button>
        <button className="w-[180px] m-1 py-2 px-4 bg-red-500 text-white rounded-3xl hover:bg-red-600 transition-colors">
          Register
        </button>
      </div>
    </div>
  );
};

export default LeftSection;