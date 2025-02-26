import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import FinancialRoadmap from "./pages/FinancialRoadmap";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/login.jsx";
import { FooterWithSocialLinks } from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Add padding to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/financial-roadmap" element={<FinancialRoadmap />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <FooterWithSocialLinks />
    </>
  );
}

export default App;
