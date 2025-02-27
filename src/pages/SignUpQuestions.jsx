import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

// ✅ Custom Button Component
const Button = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all ${className}`}
  >
    {children}
  </button>
);

// ✅ Custom Input Component
const Input = ({ value, onChange, className = "" }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={`border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:border-green-500 ${className}`}
  />
);

const questions = [
  { 
    id: 1, 
    text: "What's most important to you right now?", 
    desc: "Choose all that apply", 
    options: ["Savings", "Budgeting", "Investing"],
    images: [money1, budgeting, investment] 
  },
  { 
    id: 2, 
    text: "How old are you?", 
    desc: "Select the age bracket you fall under", 
    options: ["18-25", "26-35", "36-55", "55+"],
    images: [man, man, man, man] 
  },
  { 
    id: 3, 
    text: "What is your employment status?", 
    desc: "Are you Employed or Unemployed", 
    options: ["Employed", "Unemployed"],
    images: [employed, unemployed] 
  },
  { 
    id: 4, 
    text: "What best applies to you?", 
    desc: "Select one from each category", 
    options: {
      "Relationship Status": ["Married", "Single"],
      "Living Situation": ["Mortgage", "Rent"],
      "Children": ["Children", "No Children"]
    },
    images: {
      "Relationship Status": [ring, blank], 
      "Living Situation": [mortgage, rent], 
      "Children": [children, blank] 
    }
  },
  { 
    id: 5, 
    text: "How often do you get paid?", 
    desc: "Click what applies", 
    options: ["Weekly", "Bi-Weekly", "Monthly"],
    images: [employed, biweekly, monthly] 
  }
];

const SignUpQuestion = () => {
  const [step, setStep] = useState(0);
  const [income, setIncome] = useState([""]);
  const [emergencyFund, setEmergencyFund] = useState("");
  const [debt, setDebt] = useState("");
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  // Handles selection and moves to the next question
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleSelect = (id, category, value) => {
    setAnswers((prev) => {
      const updatedAnswers = { ...prev };
  
      if (id === 4) {
        // Ensure the nested structure is maintained
        updatedAnswers[id] = { ...(updatedAnswers[id] || {}), [category]: value };
      } else {
        updatedAnswers[id] = value;
      }
  
      return updatedAnswers;
    });
  
    // Move to next question logic
    if (id !== 4 || Object.keys(answers[4] || {}).length === 3) {
      handleNext();
    }
  };

  const handleFinish = () => {
    console.log("Redirecting to dashboard...");
    navigate("/dashboard"); 
  };

  const handleIncomeChange = (index, value) => {
    const updatedIncome = [...income];
    updatedIncome[index] = value;
    setIncome(updatedIncome);
  };

  const addIncomeField = () => {
    setIncome([...income, ""]);
  };

  return (
    <div className="container mx-auto py-12 px-6 rounded-lg">
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {/* Main Content Area */}
        <div className="md:col-span-3">
          {step < questions.length && (
            <>
              <div>
                <h2 className="font-bold text-3xl">{questions[step].text}</h2>
                <p className="font-semibold my-10">{questions[step].desc}</p>
              </div>

              {/* Question 4: Display categories line by line */}
              {questions[step].id === 4 ? (
                Object.entries(questions[step].options).map(([category, options]) => (
                  <div key={category} className="w-full mb-6">
                    <h4 className="text-lg font-semibold text-green-700 mb-2">{category}</h4>
                    <div className="flex gap-4">
                      {options.map((option, index) => (
                        <div
                          key={option}
                          className={`bg-white shadow-lg text-center rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 p-4 w-1/3 ${
                            answers[4]?.[category] === option ? "border-2 border-green-500" : ""
                          }`}
                          onClick={() => handleSelect(4, category, option)}
                        >
                          <img src={questions[step].images[category][index]} alt={option} className="object-cover rounded-t-2xl" />
                          <h3 className="text-xl font-bold mt-2">{option}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                // Render normal questions
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {questions[step].options.map((option, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg text-center rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 p-4 flex flex-col items-center"
                      onClick={() => handleSelect(questions[step].id, null, option)}
                    >
                      <img src={questions[step].images[index]} alt={option} className="w-[150px] object-cover rounded-t-2xl" />
                      <h3 className="text-xl font-bold mt-2">{option}</h3>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Additional Questions */}
          {step === 5 && (
            <>
              <h2 className="text-green-800 font-bold text-3xl">Enter your monthly earned income</h2>
              <p className="font-semibold my-10">Okay, enter your monthly paychecks and other regular income.</p>
              <div className="shadow-lg p-10 mb-10">
                {income.map((value, index) => (
                    <Input key={index} value={value} onChange={(e) => handleIncomeChange(index, e.target.value)} className="mb-2" />
                ))}
                <Button onClick={addIncomeField}>Add Income</Button>
              </div>
              <Button onClick={() => { setIncome(["0"]); handleNext(); }}>Set to 0</Button>
            </>
          )}

          {step === 6 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Enter the amount saved up for emergencies</h2>
              <Input value={emergencyFund} onChange={(e) => setEmergencyFund(e.target.value)} />
              <Button onClick={() => { setEmergencyFund("0"); handleNext(); }}>Set to 0</Button>
            </>
          )}

          {step === 7 && (
            <>
              <h2 className="text-lg font-semibold mb-4">Do you have any debt?</h2>
              <Input value={debt} onChange={(e) => setDebt(e.target.value)} />
              <Button onClick={() => { setDebt("0"); handleNext(); }}>Set to 0</Button>
            </>
          )}

          <div className="flex justify-between mt-4">
            {step > 0 && <Button onClick={handleBack}>Back</Button>}
            {step < 7 ? <Button onClick={handleNext}>Next</Button> : <Button onClick={handleFinish}>Finish</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpQuestion;
