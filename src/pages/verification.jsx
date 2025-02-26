import { useState } from "react";
import logo from "../assets/cheq-logo.png";

const VerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const email = "edmundkwesibaidoo@gmail.com"; // Replace with dynamic email

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    alert("Entered Code: " + code.join(""));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-xl">
        {/* Logo */}
        <h2 className="text-green-700 text-2xl font-bold flex items-center justify-center gap-1">
          <img src={logo} alt="Cheqpro" className="w-40" />
        </h2>

        {/* Email Verification Message */}
        <h3 className="text-xl font-semibold mt-4">Check your email!</h3>
        <p className="mt-2">
          We've sent a verification code to <strong>{email}</strong>.  
          Go over there, grab that code, and enter it here.
        </p>

        {/* Verification Code Input */}
        <div className="flex justify-center gap-3 mt-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 border border-gray-300 text-center text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        {/* Actions */}
        <p className="text-sm mt-4">
          If you don’t get your code in a few minutes, check your email’s junk folder. <br /> 
          <span className="font-semibold cursor-pointer">Resend code.</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Not you? <span className="font-semibold cursor-pointer">Start over.</span>
        </p>

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="bg-[#11230a] text-white w-full py-3 rounded-lg mt-4 hover:bg-green-800 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerificationPage;
