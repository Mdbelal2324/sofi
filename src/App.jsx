
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCompany from './components/AboutCompany';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfoio';  // Spelling ko sahi karein
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Header1 from './components/Header1';
import Portfolio1 from "./components/Portfolio1";

import ContactFrom from "./components/ContactFrom";
import  OurTeam from "./components/OurTeam";
import Mission from "./components/Mission";
import About from "./components/About";

import ServiceDetails from "./components/ServiceDetails";
import WebDevelopment from "./components/Webdevelopment";
import AppDevelopment from "./components/Appdevelopment";
import CrmSolution from "./components/CrmSolution.jsx";
import EcommerceDevelopment from "./components/Ecommercedevelopment";
import PortfolioHero from "./components/PortfolioHero.jsx";
import DigitalMarketing from "./components/DigitalMarketing.jsx";
import AiMlDevelopment from "./components/AiMlDevelopment.jsx";
import ChatbotAIDevelopment from "./components/ChatbotAIDevelopment";
import LetTalkAi from "./components/LetTalkAi.jsx";
import Consult from "./components/Consult.jsx";
import Testomonial from "./components/Testomonial.jsx";
import Faq from "./components/Faq.jsx"
import Ar from "./components/Ar.jsx"



function App() {
  return (
    <Router>
      <Header1 />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutCompany />
            
            <Services />
            <WhyChooseUs />
            
            <Portfolio />
            <Consult />
            <Testomonial/>
            <Faq/>
            
            
            <ContactSection />
          
            
          </>
        } />
        
        {/* Portfolio Page */}
        <Route path="/Portfolio1" element={<Portfolio1/>} />
        <Route path="/ContactFrom" element={<ContactFrom/>} />
        <Route path="/OurTeam"   element={<OurTeam/>} />
        <Route path="/About"     element={<About/>}  />
        
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/webdevelopment" element={<WebDevelopment/>} />
        <Route path="/appdevelopment" element={<AppDevelopment/>} />
    
        <Route path="/crmsolution"   element={<CrmSolution/>} />
        <Route path="/ecommercedevelopment"   element={<EcommerceDevelopment/>} />
        <Route path="/digitalmarketing"     element={<DigitalMarketing/>} />
        <Route path="/portfolio" element={<PortfolioHero />} />
        <Route path="/aimldevelopment" element={<AiMlDevelopment />} />
         <Route path="/ChatbotAIDevelopment" element={<ChatbotAIDevelopment />} />
          <Route path="/lettalkai" element={<LetTalkAi />} />
          <Route path="/ar"  element={<Ar/>} />

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
