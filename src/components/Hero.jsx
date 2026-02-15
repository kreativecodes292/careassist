import hm from "../assets/hh1.png";
import ss9 from "../assets/ss9.png";
import { FaHome } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { FaBed } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden text-white bg-gradient-to-r from-[#0B4F6C] via-[#0e5f80] to-[#20B2AA]">
        <div className="relative flex flex-col md:flex-row h-[100vh] sm:h-[70vh] w-full">

          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-center px-6 mt-10 py-8 md:py-0">
            <h1 className="text-2xl sm:text-2xl md:text-4xl font-extrabold leading-tight">
              Compassionate Home Care <br />
              <span className="text-[#9FE0D1] text-lg sm:text-xl md:text-3xl">
                That Puts Your Loved Ones First
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-100 leading-relaxed max-w-lg">
              Trusted, trained carers providing personalised support across the UK.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="bg-[#4CAF50] hover:bg-green-600 transition px-6 py-3 rounded-md font-semibold shadow-lg text-white text-sm sm:text-base text-center"
              >
                Request Free Care Assessment
              </a>

              <a
                href="#contact"
                className="border border-white/80 hover:bg-white hover:text-[#0B4F6C] transition px-6 py-3 rounded-md font-medium text-sm sm:text-base text-center"
              >
                Speak to Our Care Team
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex justify-center items-center  relative">
            {/* Desktop Image */}
            <div
              className="hidden md:block w-[80%] sm:w-[70%] md:w-full h-[450px] md:h-[85%] bg-cover bg-center"
              style={{ backgroundImage: `url(${hm})` }}
            ></div>

            {/* Mobile Image */}
            <div
              className="block md:hidden w-full h-[350px] sm:h-[350px] bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${ss9})` }}
            ></div>
          </div>

        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="w-full py-12 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

          {/* CARD 1 */}
          <a href="#home-care" className="bg-white rounded-lg shadow-md border hover:shadow-lg transition cursor-pointer block">
            <div className="flex items-center gap-3 bg-[#0B4F6C] text-white p-4 rounded-t-lg">
              <FaHome size={20} />
              <h3 className="text-md sm:text-lg font-semibold">Home Care</h3>
            </div>
            <div className="p-4 text-gray-700 text-sm sm:text-base">
              Personalized care visits to assist with daily tasks.
            </div>
            <div className="p-1 text-right text-gray-400">➜</div>
          </a>

          {/* CARD 2 */}
          <a href="#supported-living" className="bg-white rounded-lg shadow-md border hover:shadow-lg transition cursor-pointer block">
            <div className="flex items-center gap-3 bg-[#1CA89B] text-white p-4 rounded-t-lg">
              <MdOutlineSupport size={22} />
              <h3 className="text-md sm:text-lg font-semibold">Supported Living</h3>
            </div>
            <div className="p-4 text-gray-700 text-sm sm:text-base">
              Independent living with tailored support.
            </div>
            <div className="p-1 text-right text-gray-400">➜</div>
          </a>

          {/* CARD 3 */}
          <a href="#live-in-care" className="bg-white rounded-lg shadow-md border hover:shadow-lg transition cursor-pointer block">
            <div className="flex items-center gap-3 bg-[#0B4F6C] text-white p-4 rounded-t-lg">
              <FaBed size={20} />
              <h3 className="text-md sm:text-lg font-semibold">Live-In Care</h3>
            </div>
            <div className="p-4 text-gray-700 text-sm sm:text-base">
              24/7 care and support in your own home.
            </div>
            <div className="p-1 text-right text-gray-400">➜</div>
          </a>

        </div>
      </section>
    </>
  );
}
