import logo from "../assets/cheq-logo.png";

const WelcomeScreen = ({ userName = "Marco" }) => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-green-50 p-6">
        <div className="p-8 w-xl border-l-6">
          <div className="flex flex-row-reverse justify-between items-center">
            {/* Logo */}
            <div className="flex justify-end">
                <h2 className="text-2xl font-bold flex items-center">
                <img src={logo} alt="Cheqpro" className="w-40" />
                </h2>
            </div>
    
            {/* User Profile Icon */}
            <div className="flex">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">👤</span>
                </div>
            </div>
          </div>
  
          {/* Greeting */}
          <h2 className="text-2xl font-bold">Hello, {userName}!</h2>
  
          {/* Welcome Message */}
          <p className="my-6 text-xl">
            Welcome to Cheqpro.
          </p>
          <p className="mt-2 text-xl tracking-wide">
            Thanks for picking us to walk this budgeting journey with you.  
            Seriously. Are you ready to show your money who's in charge?  
            (Spoiler alert: It's you.)
          </p>
  
          {/* Expert Signature */}
          <div className="mt-4">
            <p className="font-semibold text-xl">Mayank Aggarwal</p>
            <p className="text-xl">Budgeting Expert</p>
          </div>
  
          {/* Get Started Button */}
          <button
            className="bg-[#11230a] text-white px-12 py-3 mt-6 hover:bg-green-800 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default WelcomeScreen;
  