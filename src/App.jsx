
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCompany from './components/AboutCompany';
import ContactSection from './components/ContactSection.Jsx';
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
import AboutMore from "./components/AboutMore";
import ServiceDetails from "./components/ServiceDetails";
import WebDevelopment from "./components/Webdevelopment";
import AppDevelopment from "./components/Appdevelopment";
import SeoService from "./components/Seoservice";
import SalesforceDevelopment from "./components/Salesforcedevelopment";
import EcommerceDevelopment from "./components/Ecommercedevelopment";

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
            
            <ContactSection />
          
            
          </>
        } />
        
        {/* Portfolio Page */}
        <Route path="/Portfolio1" element={<Portfolio1/>} />
        <Route path="/ContactFrom" element={<ContactFrom/>} />
        <Route path="/OurTeam"   element={<OurTeam/>} />
        <Route path="/About"     element={<About/>}  />
        <Route path="/AboutMore" element={<AboutMore/>} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/webdevelopment" element={<WebDevelopment/>} />
        <Route path="/appdevelopment" element={<AppDevelopment/>} />
        <Route path="/seoservice"  element={<SeoService/>}   />
        <Route path="/salesforcedevelopment"  element={<SalesforceDevelopment/>}   />
        <Route path="/ecommercedevelopment"   element={<EcommerceDevelopment/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
