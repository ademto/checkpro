import { useState } from "react";

export default function EmergencyFunds() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="max-w-[600px] p-6">
      <h2 className="text-3xl font-bold">Emergency Funds</h2>
      <p className="text-2xl my-4">Put your emergency funds amount here</p>
      <p className="text-sm text-gray-500 mt-1">
        (This is the cash amount that you have set separately for unforeseen circumstances)
      </p>
      <div className="shadow-lg px-6 py-10 mt-4 mb-6 border border-gray-50">
        <label className="flex items-center gap-2 text-gray-700 font-medium">
          <span role="img" aria-label="money-bag">💰</span> Enter amount saved
        </label>
        <div className="flex items-center mt-2">
          <span className="font-medium">Funds</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="ml-4 p-2 border border-green-300 w-full focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
      <button
        className="pl-4 pr-10 mt-4 bg-green-600 text-white py-2 text-lg font-semibold hover:bg-green-700"
      >
        Set amount to ${amount.toFixed(2)}
      </button>
      <p className="mt-2">
        Remember: You can change these figures later!
      </p>
    </div>
  );
}
