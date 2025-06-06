import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/cheq-logo.png"; // ✅ Import your image

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/question"); // ✅ Redirects to /question on any login
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex max-w-6xl w-[900px]">
        {/* Left Column - Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome Back, Please login to your account
          </h2>

          <form onSubmit={handleLogin}>
            <label className="block text-gray-600 mt-4">Email Address</label>
            <input
              type="email"
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-green-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="block text-gray-600 mt-4">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-green-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full mt-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Column - Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img src={loginImage} alt="Login" className="w-100 object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
