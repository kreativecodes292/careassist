import map from "../assets/map.png"

export default function AreasWeCover() {
  return (
    <section className="w-full py-10 bg-[#F7FAFC]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0B4F6C] mb-8">
          Areas We Cover
        </h2>

        {/* MAP + BUTTONS */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-200">

          {/* MAP IMAGE (small height like screenshot) */}
          <div className="w-full md:w-2/3 flex justify-center">
            <img
              src={map}
              alt="Map"
              className="w-full max-w-xl rounded-md"
              style={{ height: "230px", objectFit: "cover" }} // small like screenshot
            />
          </div>

          {/* BUTTONS */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex flex-col gap-3">

            <button className="bg-[#0B4F6C] text-white px-5 py-2 rounded-lg text-sm flex items-center justify-between shadow-sm">
              Home Care in Bradford
              <span>›</span>
            </button>

            <button className="bg-[#1CA89B] text-white px-5 py-2 rounded-lg text-sm flex items-center justify-between shadow-sm">
              Home Care in Leeds
              <span>›</span>
            </button>

            <button className="bg-[#36C986] text-white px-5 py-2 rounded-lg text-sm flex items-center justify-between shadow-sm">
              Supported Living in Wakefield
              <span>›</span>
            </button>
          </div>
        </div>

        {/* Bottom Quote (same as screenshot) */}
        <div className="mt-6 text-center text-gray-600 italic text-sm max-w-4xl mx-auto">
          “The carers are wonderful and have made a huge difference for my mum. Highly recommend Assist Home Care.” – <span className="font-semibold text-[#0B4F6C]">Sarah J.</span>
        </div>

      </div>
    </section>
  );
}
