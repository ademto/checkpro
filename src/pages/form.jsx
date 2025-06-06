import { useState } from "react";
// import { Button, Input, Select} from "../ui";

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

const Button = ({ children, className = "", ...props }) => {
return (
    <button
    className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
    {...props}
    >
    {children}
    </button>
);
};

const Input = ({ className = "", ...props }) => {
    return (
      <input
        className={`w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${className}`}
        {...props}
      />
    );
  };

const questions = [
  { id: 1, text: "What's most important to you right now?", options: ["Savings", "Budgeting", "Investing"] },
  { id: 2, text: "How old are you?", options: ["18-25", "26-35", "36-55", "55+"] },
  { id: 3, text: "What is your employment status?", options: ["Employed", "Unemployed"] },
  { id: 4, text: "What best applies to you?", options: ["Married", "Single", "Mortgage", "Rent", "Children", "No Children"] },
  { id: 5, text: "How often do you get paid?", options: ["Weekly", "Bi-Weekly", "Monthly"] },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [income, setIncome] = useState([""]);
  const [emergencyFund, setEmergencyFund] = useState("");
  const [debt, setDebt] = useState("");
  const [answers, setAnswers] = useState({});

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleSelect = (id, value) => setAnswers({ ...answers, [id]: value });

  const handleIncomeChange = (index, value) => {
    let newIncome = [...income];
    newIncome[index] = value;
    setIncome(newIncome);
  };
  const addIncomeField = () => setIncome([...income, ""]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      {step < questions.length && (
        <>
          <h2 className="text-lg font-semibold mb-4">{questions[step].text}</h2>
          <Select onChange={(e) => handleSelect(questions[step].id, e.target.value)}>
            {questions[step].options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </>
      )}

      {step === 5 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Enter your monthly earned income</h2>
          {income.map((value, index) => (
            <Input key={index} value={value} onChange={(e) => handleIncomeChange(index, e.target.value)} className="mb-2" />
          ))}
          <Button onClick={addIncomeField}>Add Income</Button>
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
        {step < 7 ? <Button onClick={handleNext}>Next</Button> : <Button onClick={() => console.log("Redirecting to dashboard...")}>Finish</Button>}
      </div>
    </div>
  );
}
