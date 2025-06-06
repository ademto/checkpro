// src/components/ui/Select.jsx
import React from "react";

const Select = ({ className = "", children, ...props }) => {
  return (
    <select
      className={`w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
