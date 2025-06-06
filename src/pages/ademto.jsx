import React from "react";

const AdemtoLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">ADEMTO</h1>
      <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
        Empowering the future of cybersecurity and blockchain security. 
        Stay tuned for updates as we build innovative solutions for a safer digital world.
      </p>
      <div className="mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
        <button className="p-2 bg-blue-600 rounded-r hover:bg-blue-700">
          Stay Updated
        </button>
      </div>
 I      <footer className="absolute bottom-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ADEMTO. All rights reserved.
      </footer>
    </div>
  );
};

export default AdemtoLanding;
