import hm from "../assets/hh1.png";
import { FaHome } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { FaBed } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden text-white bg-gradient-to-r from-[#0B4F6C] via-[#0e5f80] to-[#20B2AA]">
        <div className="relative h-full flex w-full">

          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-center px-4 h-full">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Home Care Services in <br />
              <span className="text-[#9FE0D1]">
                Bradford & West Yorkshire
              </span>
            </h1>

            <p className="mt-5 text-sm md:text-lg text-gray-100">
              Compassionate, Reliable, Professional Care
              <br />
              in the Comfort of Your Home.
            </p>

            <div className="mt-8 flexflex-col sm:flex gap-4">
              <button className="bg-[#4CAF50] hover:bg-green-600 transition px-7 py-3 rounded-md font-semibold shadow-lg">
                Get a Free Consultation
              </button>

              <button className="border border-white/80 hover:bg-white hover:text-[#0B4F6C] transition px-7 py-3 rounded-md font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            className="hidden md:block flex-1 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${hm})` }}
          ></div>

        </div>
      </section>

      {/* SERVICE CARDS EXACT AS IMAGE */}
      <section className="w-full py-10 bg-[#F5F7FA]">
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

          {/* CARD 1 */}
          <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
            {/* Top Bar */}
            <div className="flex items-center gap-3 bg-[#0B4F6C] text-white p-4 rounded-t-lg">
              <FaHome size={22} />
              <h3 className="text-lg font-semibold">Home Care</h3>
            </div>

            {/* Text */}
            <div className="p-4 text-gray-600 text-sm">
              Personalized care visits to assist with daily tasks.
            </div>

            {/* Arrow */}
            <div className="p-1 text-right text-gray-400">➜</div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3 bg-[#1CA89B] text-white p-4 rounded-t-lg">
              <MdOutlineSupport size={24} />
              <h3 className="text-lg font-semibold">Supported Living</h3>
            </div>

            <div className="p-4 text-gray-600 text-sm">
              Independent living with tailored support.
            </div>

            <div className="p-4 text-right text-gray-400">➜</div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3 bg-[#0B4F6C] text-white p-4 rounded-t-lg">
              <FaBed size={22} />
              <h3 className="text-lg font-semibold">Live-In Care</h3>
            </div>

            <div className="p-4 text-gray-600 text-sm">
              24/7 care and support in your own home.
            </div>

            <div className="p-4 text-right text-gray-400">➜</div>
          </div>

        </div>
      </section>
    </>
  );
}
