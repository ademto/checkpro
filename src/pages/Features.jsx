import { FaMapMarkedAlt, FaCalculator, FaBookOpen, FaShieldAlt, FaBullseye, FaLightbulb, FaLock, FaMobileAlt, FaSyncAlt } from 'react-icons/fa';

export default function Features() {
    return (
        <div className="py-30">
            <div className="container mx-auto px-5">
                <span className="bg-[#deecd9] px-4 py-2 mt-4 inline-block">Features</span>
                <p className="text-sm leading-7 py-10">We’re building more than just a website — we’re creating a platform to help you take real control of your finances. From learning the basics to building long-term security, our tools and lessons are designed to guide you every step of the way.</p>
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-2 bg-gray-100 p-5">
                        <FaMapMarkedAlt className="text-green-600 text-5xl mb-4" />
                        <h2 className="text-xl">Personalized Financial Roadmap</h2>
                        <p className="text-sm mt-5">Get a clear, step-by-step plan tailored to your financial goals — from your first budget to long-term wealth building.</p>
                    </div>
                    <div className="bg-gray-100 p-5">
                        <FaCalculator className="text-green-600 text-5xl mb-4" />
                        <h2 className="text-xl">Interactive Budgeting Tools</h2>
                        <p className="text-sm mt-5">Track your income, expenses, and savings in real-time with our easy-to-use budgeting tools.</p>
                    </div>
                    <div className="bg-gray-100 p-5">
                        <h2 className="text-xl">E-Learning Library</h2>
                        <p className="text-sm mt-5">Access bite-sized lessons and full courses on budgeting, saving, investing, and more, all in plain, easy-to-follow language.</p>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5">
                        <h2 className="text-xl">Emergency Fund Planning</h2>
                        <p className="text-sm mt-5">Build financial security by learning how to start and grow your emergency savings — with helpful milestones and reminders.</p>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5">
                        <h2 className="text-xl">Goal Tracking and Progress Monitoring</h2>
                        <p className="text-sm mt-5">Set financial goals and track your progress with our intuitive dashboard. Celebrate milestones and stay motivated.</p>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5">
                        <h2 className="text-xl">Expert Advice and Tips</h2>
                        <p className="text-sm mt-5">Get insights from financial experts on how to optimize your budget, save more, and invest wisely.</p>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5">
                        <h2 className="text-xl">Secure and Private</h2>
                        <p className="text-sm mt-5">Your financial data is safe with us. We use industry-leading security measures to protect your information.</p>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5">
                        <h2 className="text-xl">Accessible Anytime, Anywhere</h2>
                        <p className="text-sm mt-5">Access your financial tools and resources from any device, so you can manage your money on the go.</p>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5">
                        <h2 className="text-xl">Regular Updates and New Features</h2>
                        <p className="text-sm mt-5">We’re constantly improving our platform based on user feedback. Expect new features and enhancements regularly.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )    
}