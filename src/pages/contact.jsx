import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

 const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError(false);

  emailjs.sendForm(
    "service_hgcjup7",          // ✅ Service ID (direct)
    "template_vx4ygqo",         // ✅ Template ID (direct)
    formRef.current,
    "FRgU3OsHAc7gfXGxU"         // ✅ Public Key (direct)
  ).then(
    () => {
      setSuccess(true);
      setLoading(false);
      formRef.current.reset();
    },
    (err) => {
      console.error("EmailJS Error:", err);
      setError(true);
      setLoading(false);
    }
  );
};


  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-r from-[#20B2AA] via-[#0e5f80] to-[#0B4F6C] text-white relative overflow-hidden">
      
      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD166] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#06D6A0] rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Get in <span className="text-[#FFD166]">Touch</span>
        </h2>
        <p className="text-center text-gray-200 mb-12 text-lg">
          We’d love to hear from you! Reach out for inquiries or a free consultation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-[#0B4F6C] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#FFD166] p-4 rounded-full mb-4 text-2xl">
              <FaPhoneAlt />
            </div>
            <h3 className="font-bold text-xl mb-2">Call Us</h3>
            <p>+44 1234 567890</p>
          </div>

          <div className="bg-white text-[#0B4F6C] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#06D6A0] p-4 rounded-full mb-4 text-2xl">
              <FaEnvelope />
            </div>
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p>contact@homecare.co.uk</p>
          </div>

          <div className="bg-white text-[#0B4F6C] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#FFD166] p-4 rounded-full mb-4 text-2xl">
              <MdOutlineMessage />
            </div>
            <h3 className="font-bold text-xl mb-2">Live Chat</h3>
            <p>Start a chat with our support team.</p>
          </div>
        </div>

        {/* FORM (Updated fields + EmailJS) */}
        <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-[#0B4F6C]">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Send Us a Message
          </h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              required
              placeholder="Your Name"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#20B2AA]"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#20B2AA]"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#20B2AA]"
            />

            <select
              name="service"
              required
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#20B2AA]"
            >
              <option value="">Select Service</option>
              <option>Home Care</option>
              <option>Supported Living</option>
              <option>Live In Care</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your issue..."
              className="border rounded-lg px-4 py-3 md:col-span-2 focus:ring-2 focus:ring-[#20B2AA]"
            />

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#0B4F6C] hover:bg-[#20B2AA] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="md:col-span-2 text-center text-green-600">
                ✅ Message sent successfully
              </p>
            )}
            {error && (
              <p className="md:col-span-2 text-center text-red-600">
                ❌ Something went wrong
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
