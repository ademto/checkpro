import React from 'react';
import { ArrowRight } from 'lucide-react';
import money1 from '../assets/money.png';
import money2 from '../assets/coins.png';
import money3 from '../assets/dollar.png';
import money4 from '../assets/money1.png';

const DebtInfoSection = () => {
  return (
    <section className='w-full bg-gray-50'>
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-8 py-20 relative mt-16">
        {/* Floating Icons */}
        <img src={money1} alt="Money" className="absolute top-10 left-10 w-10 h-10 animate-float" />
        <img src={money2} alt="Coins" className="absolute bottom-10 right-20 w-10 h-10 animate-float" />
        <img src={money3} alt="Money Bag" className="absolute bottom-5 left-20 w-10 h-10 animate-float" />
        <img src={money4}alt="Hand with Money" className="absolute top-20 right-10 w-10 h-10 animate-float" />

        {/* Main Content */}
        <h1 className="text-6xl font-bold text-[#8dc63e] leading-tight max-w-3xl">
          the average Canadian owed $72,950 in debt, excluding mortgages.
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Let us help you gain financial independence
        </p>
        <button className="flex items-center bg-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-800 transition mt-6">
          Get Started Now
          <ArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default DebtInfoSection;
