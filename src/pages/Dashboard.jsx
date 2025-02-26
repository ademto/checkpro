import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { UserCircle } from "lucide-react";

const data = [
  { name: "Expenses", value: 5200, color: "#00A8E8" },
  { name: "Debt", value: 2200, color: "#E63946" },
  { name: "Savings", value: 300, color: "#F4A261" },
];

const FinancialDashboard = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-gray-50 rounded-lg shadow-lg">


      {/* Dashboard Layout */}
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {/* Sidebar Menu */}
        <div className="space-y-4 text-green-800 font-semibold border-r pr-4">
          <p className="hover:text-green-600 cursor-pointer">PROFILE</p>
          <p className="hover:text-green-600 cursor-pointer">BUDGET INSIGHTS</p>
          <p className="hover:text-green-600 cursor-pointer">PAYCHECK PLANNING</p>
          <p className="hover:text-green-600 cursor-pointer">EMERGENCY FUNDS</p>
          <p className="hover:text-green-600 cursor-pointer">FINANCIAL ROADMAP</p>
          <p className="hover:text-green-600 cursor-pointer">E - LEARNING</p>
        </div>
        
        {/* Pie Chart */}
        <div className="md:col-span-2 flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        
        {/* Info Section */}
        <div>
          <h3 className="text-green-800 font-bold text-lg">INFOGRAPHIC</h3>
          <p className="text-green-700 font-semibold">Your Money</p>
          
          <p className="text-green-700 font-bold mt-4">Expenses</p>
          <p>Here's your expense since January 1, 2025.</p>
          
          <p className="text-green-700 font-bold mt-4">Debts</p>
          <p>Here's how much debt you have accrued since January 1, 2025.</p>
          
          <p className="text-green-700 font-bold mt-4">Savings</p>
          <p>Here's your total savings since January 1, 2025.</p>
        </div>
      </div>

      {/* Chart Key */}
      <div className="mt-8 text-green-800 font-semibold">
        <h3 className="text-lg">Chart Key</h3>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
            <p>Debt</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
            <p>Expenses</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
            <p>Savings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;