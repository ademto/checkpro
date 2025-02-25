import { useState } from "react";
import logo from '../assets/cheq-logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-18 w-auto" />
          </a>
  
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-[#204714]"> {/* Updated text color */}
            <li><a href="#" className="hover:text-green-700">Basics</a></li>
            <li><a href="#" className="hover:text-green-700">About Us</a></li>
            <li><a href="#" className="hover:text-green-700">Testimonials</a></li>
            <li><a href="#" className="hover:text-green-700">Financial Roadmap</a></li>
          </ul>
  
          {/* Start Now Button */}
          <a href="#" className="hidden md:block bg-[#204714] text-white px-5 py-2 rounded-full hover:bg-green-800">
            Start Now
          </a>
  
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#204714] focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white py-4 text-center space-y-4 shadow-md">
            <li><a href="#" className="block text-[#204714] hover:text-green-700">Home</a></li>
            <li><a href="#" className="block text-[#204714] hover:text-green-700">Features</a></li>
            <li><a href="#" className="block text-[#204714] hover:text-green-700">Pricing</a></li>
            <li><a href="#" className="block text-[#204714] hover:text-green-700">Contact</a></li>
            <li><a href="#" className="block bg-[#204714] text-white px-4 py-2 rounded-lg hover:bg-green-800">Start Now</a></li>
          </ul>
        )}
      </nav>
    );
  };
  
  export default Navbar;