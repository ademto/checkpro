// src/components/ui/Input.jsx
import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
