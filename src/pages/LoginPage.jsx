import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ✅ Ensure cookies are sent
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Invalid credentials.");
        setLoading(false);
        return;
      }

      // ✅ Fetch user data from /auth/me
      const userResponse = await fetch("http://localhost:5000/auth/me", {
        method: "GET",
        credentials: "include",
      });

      const userData = await userResponse.json();
      setLoading(false);

      if (userResponse.ok) {
        // ✅ Update AuthContext
        dispatch({ type: "LOGIN", payload: userData });

        // ✅ Redirect based on verification status
        navigate(userData.verified ? "/dashboard" : "/question");
      } else {
        setError("Failed to fetch user data.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex max-w-6xl w-full">
        {/* Left Column - Form */}
        <div className="w-1/3 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back, Please login to your account</h2>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

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
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
