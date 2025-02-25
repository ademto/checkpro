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

const tips = [
  {
    id: "04",
    title: "Invest 15% of Your Household Income in Retirement",
    description:
      "This is where you begin regularly investing 15% of your gross income for retirement. Because if you're still working at 67, it should be because you want to, not because you have to.",
  },
  {
    id: "05",
    title: "Save for Your Children's College Fund",
    description:
      "Next, it's time to save for your children's college expenses (that is, if they pass Algebra II and Chemistry).",
  },
  {
    id: "06",
    title: "Pay Off Your Home Early",
    description:
      "Your mortgage is the only thing between you and complete freedom from debt. Can you imagine your life with no house payment?",
  },
  {
    id: "07",
    title: "Build Wealth and Give",
    description:
      "You know what people with no debt can do? Anything they want! The last step is the most fun. You can live and give like no one else.",
  },
];

const FinancialRoadmap = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Your financial roadmap to being <br /> financially independent.
      </h2>

      {/* First Section: Steps with Images */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
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
              <span className="absolute top-2 left-2 bg-[#11230a] text-white px-3 py-1 rounded-md text-lg font-semibold">
                {step.id}
              </span>
            </div>
            <h3 className="text-[#11230a] font-bold text-lg mt-4">{step.title}</h3>
            <p className="text-[#11230a] mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Second Section: Financial Tips */}
      <div className="grid md:grid-cols-3 gap-18 p-8 mt-22">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          {tips.slice(0, 2).map((tip) => (
            <div key={tip.id} className="text-left">
              <h2 className="font-bold text-xl border-t-1 pt-5 flex gap-4">
                <span className="text-[#11230a] text-5xl">{tip.id} </span>
                <span className="text-[#11230a] font-semibold">{tip.title}</span>
              </h2>
              <p className="text-[#11230a] mt-2">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="md:col-span-1 flex justify-center items-center mt-10">
          <img
            src="https://cdn.prod.website-files.com/67bccfab0fac80637cbe6cc6/67bde9b3a332de95701a8f7d_image%252015-min-p-500.png"
            alt="People working"
            className="w-full h-auto shadow-lg"
          />
        </div>

        {/* Right Column */}
        <div className="md:col-span-1 space-y-6 mt-20">
          {tips.slice(2).map((tip) => (
            <div key={tip.id} className="text-left">
              <h2 className="text-green-800 font-bold text-xl border-t-1 pt-5 flex gap-4">
              <span className="text-[#11230a] text-5xl">{tip.id} </span>
              <span className="text-[#11230a] font-semibold">{tip.title}</span>
              </h2>
              <p className="text-[#11230a] mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialRoadmap;
