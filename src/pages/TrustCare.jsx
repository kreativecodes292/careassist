import { FaShieldAlt, FaUserCheck, FaClock, FaHeart } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";

export default function TrustCare() {

    // ✅ Live Image
    const trustImg = "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop";

    return (
        <section className="w-full bg-[#F7F9FB]">

            {/* HERO */}
            <div className="bg-gradient-to-r from-[#0B4F6C] to-[#20B2AA] text-white py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Trusted, Safe & Fully Compliant Care
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-100">
                    Providing person-centred home care aligned with UK regulatory standards.
                </p>
            </div>

            {/* TRUST SECTION */}
            <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

                <img
                    src={trustImg}
                    alt="Care Support"
                    className="rounded-xl shadow-lg w-full"
                />

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-6">
                        Why Families Trust Our Care
                    </h2>

                    <p className="text-gray-600 mb-6">
                        We deliver high-quality home care services designed around dignity,
                        independence and safety. Our approach aligns with NHS values and
                        local authority expectations.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex gap-3 items-center">
                            <FaShieldAlt className="text-[#4CAF50]" />
                            CQC Compliant Care Framework
                        </li>

                        <li className="flex gap-3 items-center">
                            <FaUserCheck className="text-[#4CAF50]" />
                            DBS Checked & Fully Trained Carers
                        </li>

                        <li className="flex gap-3 items-center">
                            <MdHealthAndSafety className="text-[#4CAF50]" />
                            Safeguarding & Person-Centred Support
                        </li>

                        <li className="flex gap-3 items-center">
                            <FaClock className="text-[#4CAF50]" />
                            24/7 Responsive Care Support
                        </li>

                        <li className="flex gap-3 items-center">
                            <GiFamilyHouse className="text-[#4CAF50]" />
                            Family-Focused Approach
                        </li>
                    </ul>
                </div>
            </div>

            {/* COMPLIANCE GRID */}
            <div className="bg-white py-16 px-6">
                <h2 className="text-center text-3xl font-bold text-[#0B4F6C] mb-12">
                    Our Care Standards
                </h2>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="bg-[#F7F9FB] p-6 rounded-lg text-center shadow-sm">
                        <FaShieldAlt className="mx-auto text-4xl text-[#4CAF50]" />
                        <h3 className="mt-4 font-semibold">CQC Ready</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Aligned with UK Care Quality Commission standards.
                        </p>
                    </div>

                    <div className="bg-[#F7F9FB] p-6 rounded-lg text-center shadow-sm">
                        <FaUserCheck className="mx-auto text-4xl text-[#4CAF50]" />
                        <h3 className="mt-4 font-semibold">DBS Verified</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            All carers background checked.
                        </p>
                    </div>

                    <div className="bg-[#F7F9FB] p-6 rounded-lg text-center shadow-sm">
                        <MdHealthAndSafety className="mx-auto text-4xl text-[#4CAF50]" />
                        <h3 className="mt-4 font-semibold">Safeguarding</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Safety-first care delivery.
                        </p>
                    </div>

                    <div className="bg-[#F7F9FB] p-6 rounded-lg text-center shadow-sm">
                        <FaHeart className="mx-auto text-4xl text-[#4CAF50]" />
                        <h3 className="mt-4 font-semibold">Person Centred</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Tailored care plans for every client.
                        </p>
                    </div>

                </div>
            </div>

            {/* VIDEO */}
            <div className="py-16 px-6 bg-[#F7F9FB] text-center">
                <h2 className="text-3xl font-bold text-[#0B4F6C] mb-8">
                    See How Our Care Makes a Difference
                </h2>

                <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-[220px] md:h-[400px]"
                        src="https://www.youtube.com/embed/9No-FiEInLA"
                        title="Home Care Services"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
            </div>

            {/* CTA */}
            <div className="text-center py-16 px-6 bg-gradient-to-r from-[#0B4F6C] to-[#20B2AA] text-white">
                <h2 className="text-3xl font-bold">
                    Looking for Reliable Home Care?
                </h2>

                <p className="mt-4 text-lg text-gray-100">
                    Speak with our care advisors today.
                </p>

                <button className="mt-6 bg-[#4CAF50] px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition">
                    Request Free Consultation
                </button>
            </div>

        </section>
    );
}
