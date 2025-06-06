import React from "react";

import money1 from "../assets/money.png";
import man from "../assets/man.png";
import biweekly from "../assets/bi-weekly.png";
import mortgage from "../assets/mortgage.png";
import rent from "../assets/rent.png";
import employed from "../assets/employed.png";
import unemployed from "../assets/unemployed.png";
import ring from "../assets/ring.png";
import investment from "../assets/investment.png";
import budgeting from "../assets/budgeting.png";
import blank from "../assets/blank.png";
import children from "../assets/children.png";
import monthly from "../assets/monthly.png";
import emergency from "../assets/emergency.png";
import treasure from "../assets/treasure.png";


const financialSteps = [
  {
    step: "STEP 1",
    title: "Road to $1000",
    description: "Emergency Fund (Cash)",
    amount: "$1,000",
    image: emergency, // Replace with your actual image path
  },
  {
    step: "STEP 2",
    title: "Road to Debt Payment",
    description: "Debt Counter",
    amount: "Total debt: $17,987 | Total repayment: $13,766",
    image: budgeting,
  },
  {
    step: "STEP 3",
    title: "Medium Term Savings",
    description: "TFSA Savings",
    amount: "$1,987",
    image: money1,
  },
  {
    step: "STEP 4",
    title: "Invest 10% of Income",
    description: "Investment Portfolio",
    amount: "Invest 10% of income",
    image: investment,
  },
  {
    step: "STEP 5",
    title: "Children’s College Fund",
    description: "Save for College",
    amount: "Children’s college fund",
    image: money1,
  },
  {
    step: "STEP 6",
    title: "Payoff Mortgage",
    description: "Pay Off Your Home Early",
    amount: "Mortgage Payment",
    image: mortgage,
  },
  {
    step: "STEP 7",
    title: "Build Wealth and Give",
    description: "Build Wealth",
    amount: "Wealth & Giving",
    image: treasure,
  },
];

const FinancialRoadmap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Financial Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {financialSteps.map((step, index) => (
          <div key={index} className="p-6 rounded-xl shadow-md text-center bg-green-100">
            <img src={step.image} alt={step.title} className="w-16 h-16 mx-auto" />
            <h2 className="text-xl font-bold mt-3">{step.step}</h2>
            <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
            <p className="text-gray-700 mt-2">{step.description}</p>
            <p className="text-green-900 font-semibold mt-2">{step.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialRoadmap;
