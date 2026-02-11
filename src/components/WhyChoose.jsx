export default function WhyChoose() {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-12">
          Why Choose Assist Home Care?
        </h2>

        {/* 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center">
            {/* EXACT Shield Icon */}
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64">
                <path
                  d="M32 2L6 14V30C6 46 18 58 32 62C46 58 58 46 58 30V14L32 2Z"
                  fill="#0B4F6C"
                />
                <path
                  d="M32 22L25 34H30V44H34V34H39L32 22Z"
                  fill="white"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-[#0B4F6C]">
              CQC Rated "Good"
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              High standards of care.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center">
            {/* EXACT Team Icon */}
            <div className="mb-4">
              <svg width="75" height="75" viewBox="0 0 64 64">
                <circle cx="20" cy="22" r="10" fill="#1CA89B" />
                <circle cx="44" cy="22" r="10" fill="#1CA89B" />
                <circle cx="32" cy="36" r="14" fill="#1CA89B" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-[#0B4F6C]">
              Experienced Team
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Qualified & compassionate carers.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center">
            {/* EXACT Heart Icon */}
            <div className="mb-4">
              <svg width="70" height="70" viewBox="0 0 64 64">
                <path
                  d="M32 58L12 40C3 30 9 16 21 16C27 16 31 20 32 22C33 20 37 16 43 16C55 16 61 30 52 40L32 58Z"
                  fill="#20B2AA"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-[#0B4F6C]">
              Local & Trusted
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Serving Bradford & West Yorkshire.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
