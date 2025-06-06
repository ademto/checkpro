import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import logo from '../assets/cheq-logo.png'
import HeroImg from '../assets/HeroImg.png'

const HeroSection = () => {
  return (
    <section className='flex items-center justify-center mt-20'>
        <div className="container flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-white">
        {/* Left Side */}
        <div className="flex flex-col justify-between space-y-6 max-w-lg h-[70vh]">
            <div>
                <h1 className="text-5xl font-bold text-[#204714] leading-tight">
                    Your path <br /> to financial <br /> freedom
                </h1>
                <button className="flex items-center text-xl font-bold text-green-500 py-3">
                Book a Call
                <ArrowUpRight className="ml-2" />
                </button>
            </div>

            {/* Bottom Left - Logo & Stats */}
            <div className="flex flex-col space-x-4 mt-10">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Cheapro Logo" className="h-20" />
            </div>
            <div>
                <div className="flex items-center text-red-500">
                {Array(4).fill(0).map((_, idx) => (
                    <span className='text-4xl' key={idx}>★</span>
                ))}
                <span className="text-red-500 text-4xl">☆</span>
                </div>
                <p className="text-lg font-semibold">
                (73.2%) of people <br /> have some type of <br /> outstanding debt
                </p>
            </div>
            </div>
        </div>

        {/* Center - Hero Image */}
        <div className="my-10 lg:my-0">
            <img
            src={HeroImg}
            alt="Hero Person"
            className="h-[90vh] object-cover rounded-lg"
            />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between space-y-6 max-w-sm h-[70vh]">
            <div>
                <p className="text-[#204714] text-xl">
                Hi my name is Marco and I will <br /> help you get your Early <br /> Financial Freedom Plan <br />(EFFP)
                </p>
                <div className="flex items-center space-x-2 mt-10 border-b-1 pb-2">
                    <Mail className="text-green-700" />
                    <span className="font-semibold text-[#204714] text-2xl">help@cheqpro.com</span>
                </div>
            </div>    

            {/* Testimonial */}
            <div className="flex items-center space-x-4 mt-10">
            <p className="italic text-lg text-[#204714]">
                “Will helped you reach <br />financial freedom”
            </p>
            </div>
        </div>
        </div>
    </section>
  );
};

export default HeroSection;
