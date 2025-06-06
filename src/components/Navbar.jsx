import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cheq-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);


  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-18 w-auto" />
          </Link>
        </div>

        {/* Center: Nav links */}
        <ul className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-10 text-[#204714]">
          <li><Link to="/basics" className="hover:text-green-700">Basics</Link></li>
          <li><Link to="/about" className="hover:text-green-700">About Us</Link></li>
          <li><Link to="/" className="hover:text-green-700">Features</Link></li>
          <li><Link to="/" className="hover:text-green-700">Contact</Link></li>
        </ul>

        {/* Right: Login / Signup or User info */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-[#204714] font-semibold">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hidden md:block text-[#204714] px-5 py-2 rounded-full">
                Log in
              </Link>
              <Link to="/signup" className="hidden md:block bg-[#204714] text-white px-5 py-2 rounded-full hover:bg-green-800">
                Start Now
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#204714] focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (same as before) */}
      {!user && isOpen && (
        <ul className="md:hidden bg-white py-4 text-center space-y-4 shadow-md">
          <li><Link to="/basics" className="block text-[#204714] hover:text-green-700">Basics</Link></li>
          <li><Link to="/about" className="block text-[#204714] hover:text-green-700">About Us</Link></li>
          <li><Link to="/testimonials" className="block text-[#204714] hover:text-green-700">Testimonials</Link></li>
          <li><Link to="/financial-roadmap" className="block text-[#204714] hover:text-green-700">Financial Roadmap</Link></li>
          <li><Link to="/dashboard" className="block bg-[#204714] text-white px-4 py-2 rounded-lg hover:bg-green-800">Start Now</Link></li>
        </ul>
      )}
    </nav>

  );
};

export default Navbar;
