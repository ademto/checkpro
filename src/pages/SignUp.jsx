import { Link } from "react-router-dom";
import logo from '../assets/cheq-logo.png';
import HeroImg from '../assets/HeroImg.png';
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="flex w-full max-w-5xl h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
                
                {/* Left side - Login form */}
                <div className="w-1/2 p-10 flex flex-col justify-between">
                    <Link to="/">
                        <img src={logo} alt="Cheq logo" className="w-30 -ml-1.5" />
                    </Link>
                   <div>
                        <div className='-mt-10'>
                            <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
                            <p className="text-gray-600 text-sm mb-6">Start your journey to smarter money habits. Get access to budgeting tools, learning guides, and a personalized dashboard.</p>
                        </div>
                        
                        <form>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border p-2 mt-1 mb-4 focus:ring focus:ring-green-300"
                                placeholder="Enter your email"
                                required
                            />

                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border p-2 mt-1 mb-4 focus:ring focus:ring-green-300"
                                placeholder="Enter your password"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full py-2 bg-green-700 text-white hover:bg-green-800"
                            >
                                Login
                            </button>
                            <button className='w-full border mt-5 p-2 flex items-center justify-center gap-2'>
                                <FcGoogle className="text-2xl"/>
                                Sign Up With Google</button>
                        </form>
                   </div>
                    <p className="text-sm mt-4 text-center">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-green-600 hover:underline">Sign up</a>
                    </p>
                </div>

                {/* Right side - Image */}
                <div className="w-1/2 flex items-center justify-center bg-[#ebebeb]">
                    <img src={HeroImg} alt="Hero" className="object-cover h-full" />
                </div>
            </div>
        </div>
    );
}
