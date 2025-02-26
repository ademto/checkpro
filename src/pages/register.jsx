import React from "react";
import HeroImg from '../assets/HeroImg.png'
import googleLogo from "../assets/google.png";
import coins from '../assets/coins.png';
import money from '../assets/money.png';
import logo from "../assets/cheq-logo.png";

const LoginPage = () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg flex max-w-6xl w-full">
          {/* Left Column - Form */}
          <div className="w-1/3 p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back, Please login to your account</h2>
            
            <button className="w-full mt-4 py-2 border flex items-center justify-center gap-2 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50">
              <img src={googleLogo} alt="Google" className="w-15" />
              Sign in with Google
            </button>
            
            <p className="text-center my-4 text-gray-500">or</p>
            
            <form>
              <label className="block text-gray-600">Email Address</label>
              <input type="email" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-green-300" placeholder="Enter your email" />
              
              <label className="block text-gray-600 mt-4">Password</label>
              <input type="password" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-green-300" placeholder="Enter your password" />
              
              <div className="flex items-center justify-between mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
              </div>
              
              <button className="w-full mt-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Login</button>
            </form>
            
            <button className="w-full mt-2 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-100">Sign up</button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By signing up you agree to Cheqpro’s <a href="#" className="text-green-600 hover:underline">Terms and Conditions & Privacy Policy</a>
            </p>
          </div>
  
          {/* Center Column - Image */}
          <div className="w-1/3 flex items-center justify-center p-8">
            <img src={HeroImg} alt="Person" className="" />
          </div>
  
          {/* Right Column - Text and Coins */}
          <div className="w-1/3 bg-green-50 flex flex-col items-center justify-center p-8 relative">
            <img src={money} alt="Coins" className="w-50" />
            <p className="text-[#11230a] font-semibold text-4xl mt-4 text-center">Your path to financial freedom</p>
            <img src={coins} alt="Coins" className="w-60" />
          </div>
        </div>
      </div>
    );
  };

const NameEntryPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <img src={logo} alt="Cheqpro" className="w-40 mb-6" />
      <div className="bg-white p-8 shadow-md w-120">
        <h2 className="text-xl font-semibold text-gray-800">Enter Your Name</h2>
        <p className="text-gray-600 mb-4">We want to personalize this experience for you.</p>
        <input type="text" placeholder="First Name" className="w-full border p-2 mb-2" />
        <input type="text" placeholder="Last Name" className="w-full border p-2 mb-4" />
        <button className="w-full bg-[#11230a] text-white py-2 hover:bg-green-800">Continue</button>
      </div>
    </div>
  );
};

const ConfirmationPage = () => {
  return (
    <div className="flex items-center justify-center h-[60vh] bg-white">
        <div className="shadow-md flex flex-col items-center justify-center w-xl py-5">
            <img src={logo} alt="Cheqpro" className="w-32 mb-4" />
            <img src="../assets/confetti.png" alt="Success" className="w-16 mb-4" />
            <h2 className="font-semibold text-gray-800 text-2xl pb-4">You're all set!</h2>
            <p className="text-center px-8 mb-6 text-xl">Let's take you over to the Cheqpro application so you can start setting up your budget.</p>
            <button className="bg-[#11230a] text-white py-2 px-6 hover:bg-green-800">Continue</button>
        </div>
    </div>
  );
};

export { LoginPage, NameEntryPage, ConfirmationPage };
