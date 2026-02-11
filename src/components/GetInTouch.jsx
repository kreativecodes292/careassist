import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-[#f4f8fb] py-14 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">

        {/* Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-[#1f9d55] text-white text-sm px-4 py-2 rounded-full">
            <FaCalendarCheck className="text-sm" />
            Get in Touch
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] font-bold text-[#0b2c3d] mb-3">
          Need Care? Contact Us Today!
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Our friendly team is ready to help you with professional and
          compassionate home care services.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-3 text-[#0b2c3d] font-semibold">
            <FaPhoneAlt className="text-[#1f9d55]" />
            01234 567 890
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#1f9d55] text-white text-sm px-7 py-3 rounded-md font-semibold shadow-md transition hover:bg-[#178144] hover:scale-105"
        >
          <FaCalendarCheck />
          Request Free Consultation
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
