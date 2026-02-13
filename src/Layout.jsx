import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterTop from "./components/FooterTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import TrustCare from "./pages/TrustCare";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Routed Pages */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trust-care" element={<TrustCare />} />
          
          {/* Add more pages as needed */}
        </Routes>
      </div>

      <FooterTop />
    </div>
  );
};

export default Layout; // ✅ Make sure this line is here
