import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import f1 from "../assets/ff1.png";
import f2 from "../assets/ff2.png";
import f3 from "../assets/ff3.png";

const FooterTop = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Logos */}
        <div className="flex flex-col sm:flex-row items-center">
          <img
            src={f1}
            alt="Trustpilot"
            className="h-22 sm:h-20 object-contain"
          />
          <img
            src={f2}
            alt="Homecare"
            className="h-22 sm:h-20 object-contain"
          />
        </div>

        {/* Right Social + Image */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-4">
          <div className="flex gap-2 sm:gap-4">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
            >
              <FaFacebookF size={14} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
            >
              <FaLinkedinIn size={14} />
            </a>

          </div>

          <img
            src={f3}
            alt="Office"
            className="w-25 h-25 sm:w-20 sm:h-20 rounded-full object-cover mt-2 sm:mt-0"
          />
        </div>

      </div>
    </footer>
  );
};

export default FooterTop;
