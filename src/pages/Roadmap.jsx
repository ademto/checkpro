import React from "react";

const steps = [
  {
    id: "01",
    title: "Save $1,000 Your Starter Emergency Fund",
    description:
      "Save $1,000 as fast as you can. Your emergency fund will cover those unexpected life events you can't plan for.",
    image: "https://cdn.prod.website-files.com/67bccfab0fac80637cbe6cc6/67bda29dc5a230660b10edcc_Image%20(15).png",
  },
  {
    id: "02",
    title: "Pay Off All Debt (Except the House)",
    description:
      "Pay off debts (except your mortgage) from smallest to largest, paying minimums on all but the smallest. Once cleared, roll that payment into the next.",
    image: "https://cdn.prod.website-files.com/67bccfab0fac80637cbe6cc6/67bde99f50e00adcae53799c_Image%20(16).png",
  },
  {
    id: "03",
    title: "Save 3–6 Months of Expenses",
    description:
      "Debt-free? Keep going! Use that money to build a 3–6 month emergency fund to stay protected from major surprises without new debt.",
    image: "https://cdn.prod.website-files.com/67bccfab0fac80637cbe6cc6/67bde99f50e00adcae53799f_Image%20(17).png",
  },
];

const FinancialRoadmap = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-8">
        Your financial roadmap to being financially independent.
      </h2>

      {/* First row with images */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.slice(0, 3).map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="relative">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg w-full"
              />
              <span className="absolute top-2 left-2 bg-green-800 text-white px-3 py-1 rounded-md text-lg font-semibold">
                {step.id}
              </span>
            </div>
            <h3 className="font-bold text-lg text-green-900 mt-4">{step.title}</h3>
            <p className="text-gray-700 mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Second row without images */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {steps.slice(3).map((step) => (
          <div key={step.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-green-800 font-bold text-xl flex items-center">
              <span className="text-3xl font-bold mr-3">{step.id}</span> {step.title}
            </h3>
            <p className="text-gray-700 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialRoadmap;
