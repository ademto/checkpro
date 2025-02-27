import React, { useState } from "react";

const initialBudgetData = {
  essential: [
    { name: "Gas", amount: "" },
    { name: "Rent", amount: "" },
    { name: "Groceries", amount: "" },
    { name: "Cell Phone", amount: "" },
  ],
  personal: [
    { name: "Shopping", amount: "" },
    { name: "Restaurant", amount: "" },
  ],
  debt: [
    { name: "Credit Card", amount: "" },
    { name: "Student", amount: "" },
    { name: "Car Loan", amount: "" },
  ],
  savings: [{ name: "Savings", amount: "" }],
  income: [{ name: "Income", amount: "" }],
};

const BudgetInsight = () => {
  const [budget, setBudget] = useState(initialBudgetData);

  const handleAmountChange = (category, index, value) => {
    const updatedBudget = { ...budget };
    updatedBudget[category][index].amount = value;
    setBudget(updatedBudget);
  };

  const addItem = (category) => {
    const updatedBudget = { ...budget };
    updatedBudget[category].push({ name: "New Item", amount: "" });
    setBudget(updatedBudget);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Budget Insight</h1>
      <p className="text-gray-600 mb-2">Get an insight into your budget.</p>
      <p className="text-gray-500 mb-6">See where your money goes and how it is spent.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(budget).map((category, catIndex) => (
          <div key={catIndex} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">
              <span>💰</span> {category.charAt(0).toUpperCase() + category.slice(1)} Expense
            </h2>
            <div className="mt-4 space-y-2">
              {budget[category].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">{item.name}</span>
                  <input
                    type="text"
                    className="border bg-green-100 text-green-900 px-2 py-1 rounded-md w-24 text-right"
                    value={item.amount}
                    onChange={(e) => handleAmountChange(category, index, e.target.value)}
                  />
                </div>
              ))}
              <button
                onClick={() => addItem(category)}
                className="text-green-700 text-sm mt-2 hover:underline"
              >
                + Add Item
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Add Budget Button */}
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Budget
      </button>
    </div>
  );
};

export default BudgetInsight;
