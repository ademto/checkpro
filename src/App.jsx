import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import FinancialRoadmap from "./pages/FinancialRoadmap";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import { NameEntryPage } from "./pages/register.jsx";
import { ConfirmationPage } from "./pages/register.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignUpQuestion from "./pages/SignUpQuestions.jsx";
import VerificationPage from "./pages/verification.jsx";
import WelcomeScreen from "./pages/welcome.jsx";
import MultiStepForm from "./pages/form.jsx";
import { FooterWithSocialLinks } from "./components/Footer.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; 
import BudgetInsight from "./pages/BudgetInsight.jsx";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import Layout from "./components/Layout"; 
import Features from "./pages/Features.jsx";
import ContactPage from "./pages/Contact.jsx";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/financial-roadmap" element={<FinancialRoadmap />} />
            <Route path="/name" element={<NameEntryPage />} />
            <Route path="/confirm" element={<ConfirmationPage />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/question" element={<SignUpQuestion />} />
            <Route path="/form" element={<MultiStepForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budget" element={<BudgetInsight />} />
          </Route>
          <Route path="/login1" element={<LoginPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup1" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </>
  );
}

export default App;
