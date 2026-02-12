import React, { useEffect } from "react";
import { FaHome, FaBed } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Home Care",
      icon: <FaHome size={22} />,
      description:
        "Personalized care visits to assist with daily tasks, medication reminders, and companionship, all in the comfort of your home.",
      highlights: [
        "Daily visits tailored to your needs",
        "Professional and compassionate caregivers",
        "Medication reminders & personal assistance",
      ],
      image: ss1,
      color: "bg-[#0B4F6C]",
    },
    {
      id: 2,
      title: "Supported Living",
      icon: <MdOutlineSupport size={22} />,
      description:
        "Independent living with tailored support, ensuring safety and quality of life while maintaining personal freedom.",
      highlights: [
        "24/7 support available",
        "Safe and comfortable environment",
        "Personalized care plans",
      ],
      image: ss2,
      color: "bg-[#1CA89B]",
    },
    {
      id: 3,
      title: "Live-In Care",
      icon: <FaBed size={22} />,
      description:
        "24/7 care and support in your own home, helping with daily activities, companionship, and round-the-clock assistance.",
      highlights: [
        "Continuous care at home",
        "Personalized schedules",
        "Experienced live-in caregivers",
      ],
      image: ss4,
      color: "bg-[#0B4F6C]",
    },
  ];

  return (
    <div className="w-full bg-[#F5F7FA] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-gradient-to-r from-[#0B4F6C] via-[#0e5f80] to-[#20B2AA] text-white py-20 sm:py-24 md:py-32 px-6 md:px-12">

        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Image */}
          <div className="relative w-full order-1 md:order-2">
            <img
              src={ss3}
              alt="Care Service"
              className="w-full h-64 sm:h-80 md:h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Compassionate{" "}
              <span className="text-[#4CAF50]">Care Services</span> for a Better Life
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0">
              We provide personalized home care, supported living, and live-in care
              solutions to improve comfort, safety, and quality of life.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              {/* Contact Button */}
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Get Consultation
              </button>

              {/* Services Page (optional change if needed) */}
              <button
                onClick={() => navigate("/services")}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B4F6C] transition-all duration-300"
              >
                Learn More
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 sm:h-80 md:h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12">
              <div
                className={`inline-flex items-center gap-3 px-4 py-2 ${service.color} text-white rounded-full mb-4 shadow-md`}
              >
                {service.icon}
                <span className="font-semibold text-sm sm:text-base">
                  {service.title}
                </span>
              </div>

              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                {service.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/contact")}
                className="mt-6 bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Get Consultation
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
