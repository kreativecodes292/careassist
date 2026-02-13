import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "#contact" },
    { label: "Why Us", to: "/trust-care" },
  ];

  const handleContactClick = () => {
    setMenuOpen(false);

    // if already on home page → just scroll
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-[#0A3B50] text-gray-100 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Home Care
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link) =>
            link.label === "Contact" ? (
              <a
                key={link.label}
                href="/#contact"
                onClick={handleContactClick}
                className="relative hover:text-[#9FE0D1] transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#9FE0D1] hover:after:w-full"
              >
                Contact
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="relative hover:text-[#9FE0D1] transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#9FE0D1] hover:after:w-full"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:01234567890"
            className="bg-[#20B2AA] hover:bg-[#1a9c95] transition px-4 py-2 rounded-md text-sm font-semibold text-white"
          >
            Call Us: 01234 567 890
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0A3B50] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>

          <a
            href="/#contact"
            onClick={handleContactClick}
            className="text-lg font-medium"
          >
            Contact
          </a>

          <a
            href="tel:01234567890"
            className="bg-[#20B2AA] mt-4 px-4 py-2 rounded-md text-white font-semibold text-center"
          >
            Call Us: 01234 567 890
          </a>
        </nav>
      </div>
    </header>
  );
}
