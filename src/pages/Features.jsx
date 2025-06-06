import { FaMapMarkedAlt, FaCalculator, FaBookOpen, FaShieldAlt, FaBullseye, FaLightbulb, FaLock, FaMobileAlt, FaSyncAlt } from 'react-icons/fa';

export default function Features() {
    const features = [
        {
          id: 1,
          icon: <FaMapMarkedAlt className="text-green-600 text-5xl mb-4" />,
          title: "Personalized Financial Roadmap",
          description: "Get a clear, step-by-step plan tailored to your financial goals — from your first budget to long-term wealth building."
        },
        {
          id: 2,
          icon: <FaCalculator className="text-green-600 text-5xl mb-4" />,
          title: "Interactive Budgeting Tools",
          description: "Track your income, expenses, and savings in real-time with our easy-to-use budgeting tools."
        },
        {
          id: 3,
          icon: <FaBookOpen className="text-green-600 text-5xl mb-4" />,
          title: "E-Learning Library",
          description: "Access bite-sized lessons and full courses on budgeting, saving, investing, and more, all in plain, easy-to-follow language."
        },
        {
          id: 4,
          icon: <FaShieldAlt className="text-green-600 text-5xl mb-4" />,
          title: "Emergency Fund Planning",
          description: "Build financial security by learning how to start and grow your emergency savings — with helpful milestones and reminders."
        },
        {
          id: 5,
          icon: <FaBullseye className="text-green-600 text-5xl mb-4" />,
          title: "Goal Tracking and Progress Monitoring",
          description: "Set financial goals and track your progress with our intuitive dashboard. Celebrate milestones and stay motivated."
        },
        {
          id: 6,
          icon: <FaLightbulb className="text-green-600 text-5xl mb-4" />,
          title: "Expert Advice and Tips",
          description: "Get insights from financial experts on how to optimize your budget, save more, and invest wisely."
        },
        {
          id: 7,
          icon: <FaLock className="text-green-600 text-5xl mb-4" />,
          title: "Secure and Private",
          description: "Your financial data is safe with us. We use industry-leading security measures to protect your information."
        },
        {
          id: 8,
          icon: <FaMobileAlt className="text-green-600 text-5xl mb-4" />,
          title: "Accessible Anytime, Anywhere",
          description: "Access your financial tools and resources from any device, so you can manage your money on the go."
        },
        {
          id: 9,
          icon: <FaSyncAlt className="text-green-600 text-5xl mb-4" />,
          title: "Regular Updates and New Features",
          description: "We’re constantly improving our platform based on user feedback. Expect new features and enhancements regularly."
        },
      ];
      
    return (
        <div className="py-30">
            <div className="container mx-auto px-5">
                <span className="bg-[#deecd9] px-4 py-2 mt-4 inline-block">Features</span>
                <p className="text-sm leading-7 py-10">We’re building more than just a website — we’re creating a platform to help you take real control of your finances. From learning the basics to building long-term security, our tools and lessons are designed to guide you every step of the way.</p>
                <div className="grid grid-cols-4 gap-5">
                    {features.map(feature => (
                        <div className={`${feature.id !== 2 && feature.id !== 3 ? 'col-span-2' : ''} bg-gray-100 p-5`}>
                            {feature.icon}
                            <h2 className="text-xl">{feature.title}</h2>
                            <p className="text-sm mt-5">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )    
}