import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import DebtInfoSection from './components/DebtInfoSection.jsx'
import { FooterWithSocialLinks } from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <DebtInfoSection />
    <FooterWithSocialLinks />
  </StrictMode>,
)
