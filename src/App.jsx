import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import FinancialRoadmap from "./pages/FinancialRoadmap";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { NameEntryPage } from "./pages/register.jsx";
import { ConfirmationPage } from "./pages/register.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignUpQuestion from "./pages/SignUpQuestions.jsx";
import VerificationPage from "./pages/verification.jsx";
import WelcomeScreen from "./pages/welcome.jsx";
import MultiStepForm from "./pages/form.jsx";
import { FooterWithSocialLinks } from "./components/Footer.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; 
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <AuthProvider> {/* Wrap everything in AuthProvider */}
      <Navbar />
      <div className="pt-20"> {/* Add padding to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/financial-roadmap" element={<FinancialRoadmap />} />
          <Route path="/name" element={<NameEntryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/confirm" element={<ConfirmationPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/question" element={<SignUpQuestion />} />
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Protect the dashboard route */}
          {/* <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </div>
      <FooterWithSocialLinks />
    </AuthProvider>
  );
}

export default App;
