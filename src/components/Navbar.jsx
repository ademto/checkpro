import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cheq-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Safe function to get user from localStorage
  const getUserFromLocalStorage = () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser || storedUser === "undefined") return null; // Prevent parsing errors
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  };

  // Simulate authentication check
  useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-18 w-auto" />
        </Link>

        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-[#204714] font-semibold">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 text-[#204714]">
              <li><Link to="/basics" className="hover:text-green-700">Basics</Link></li>
              <li><Link to="/about" className="hover:text-green-700">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-green-700">Testimonials</Link></li>
              <li><Link to="/financial-roadmap" className="hover:text-green-700">Financial Roadmap</Link></li>
            </ul>

            {/* Start Now Button */}
            <Link to="/start" className="hidden md:block bg-[#204714] text-white px-5 py-2 rounded-full hover:bg-green-800">
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

      {/* Mobile Menu */}
      {!user && isOpen && (
        <ul className="md:hidden bg-white py-4 text-center space-y-4 shadow-md">
          <li><Link to="/basics" className="block text-[#204714] hover:text-green-700">Basics</Link></li>
          <li><Link to="/about" className="block text-[#204714] hover:text-green-700">About Us</Link></li>
          <li><Link to="/testimonials" className="block text-[#204714] hover:text-green-700">Testimonials</Link></li>
          <li><Link to="/financial-roadmap" className="block text-[#204714] hover:text-green-700">Financial Roadmap</Link></li>
          <li><Link to="/start" className="block bg-[#204714] text-white px-4 py-2 rounded-lg hover:bg-green-800">Start Now</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
