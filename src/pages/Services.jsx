import React, { useEffect } from "react";
import { FaHome, FaBed } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";


export default function Services() {

    // 👇 ADD THIS
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
      icon: <FaHome size={24} />,
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
      icon: <MdOutlineSupport size={24} />,
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
      icon: <FaBed size={24} />,
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
    <div className="w-full bg-[#F5F7FA]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#0B4F6C] via-[#0e5f80] to-[#20B2AA] text-white py-32 px-6 md:px-12 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Compassionate <span className="text-[#4CAF50]">Care Services</span> for a Better Life
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
              We provide personalized home care, supported living, and live-in care solutions to improve comfort, safety, and quality of life.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Get Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B4F6C] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Optional Hero Image */}
          <div className="hidden md:block relative">
            <img
              src={ss3}
              alt="Home Care"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid gap-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
          >
            {/* Image */}
            <div
              className="flex-1 h-64 md:h-80 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Text */}
            <div className="flex-1 p-6 md:p-12">
              <div className={`inline-flex items-center gap-3 px-4 py-2 ${service.color} text-white rounded-full mb-4 shadow-md`}>
                {service.icon}
                <span className="font-semibold">{service.title}</span>
              </div>

              <p className="text-gray-700 mb-4">{service.description}</p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {service.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <button className="mt-6 bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                Get Consultation
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
