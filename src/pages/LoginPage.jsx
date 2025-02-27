import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect to /question without backend authentication
    navigate("/question");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex max-w-6xl w-full">
        {/* Left Column - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome Back, Please login to your account
          </h2>

          <form onSubmit={handleLogin}>
            <label className="block text-gray-600">Email Address</label>
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

        {/* Right Column - Full Image */}
        <div
          className="w-1/2 h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
