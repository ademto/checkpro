import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import HeroImg from '../assets/HeroImg.png'
import googleLogo from "../assets/google.png";
import coins from '../assets/coins.png';
import money from '../assets/money.png';
import logo from "../assets/cheq-logo.png";

const SignUpPage = () => {
    const navigate = useNavigate(); // Initialize navigation
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    const [error, setError] = useState(null);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        const response = await fetch("http://localhost:5000/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          navigate("/confirm"); // Redirect to confirmation page
        } else {
          setError(data.message || "Signup failed. Please try again.");
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      }
    };
  
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
          
          {/* Left - Image Section */}
          <div className="w-1/2 hidden md:flex items-center justify-center bg-green-50 p-8">
            <img src={HeroImg} alt="Illustration" className="w-80" />
          </div>
  
          {/* Right - Sign Up Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Create an Account</h2>
            <p className="text-gray-500 text-center mt-2">Join us and start your journey today.</p>
  
            {error && <p className="text-red-500 text-center">{error}</p>}
  
            <form className="mt-6 space-y-4" onSubmit={handleSignUp}>
              <div className="flex gap-4">
                <input 
                  type="text" name="firstName" value={formData.firstName} 
                  onChange={handleChange} className="w-1/2 border rounded-lg p-2 focus:ring focus:ring-green-300" 
                  placeholder="First Name" required
                />
                <input 
                  type="text" name="lastName" value={formData.lastName} 
                  onChange={handleChange} className="w-1/2 border rounded-lg p-2 focus:ring focus:ring-green-300" 
                  placeholder="Last Name" required
                />
              </div>
  
              <input 
                type="email" name="email" value={formData.email} 
                onChange={handleChange} className="w-full border rounded-lg p-2 focus:ring focus:ring-green-300" 
                placeholder="Email Address" required
              />
              <input 
                type="password" name="password" value={formData.password} 
                onChange={handleChange} className="w-full border rounded-lg p-2 focus:ring focus:ring-green-300" 
                placeholder="Password" required
              />
  
              <button type="submit" className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                Sign Up
              </button>
            </form>
  
            <p className="text-sm mt-4 text-center">
              Already have an account? <a href="/login" className="text-green-600 hover:underline">Log in</a>
            </p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default SignUpPage;