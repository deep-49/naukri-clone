import React from "react"
import LeftSection from "../components/LeftSection"
import RightSection from "../components/RightSection"
import CompanyCard from "../components/CompanyCard";

const companiesData = [
    {
        id: 1,
        name: "Atlas Jewellery",
        logo: "/api/placeholder/80/40",
        rating: "NaN",
        reviews: "6 reviews",
    },
    {
        id: 2,
        name: "Digit Insurance",
        logo: "/api/placeholder/80/40",
        rating: "4.0",
        reviews: "1.1K+ reviews",
    },
    {
        id: 3,
        name: "Aviva India",
        logo: "/api/placeholder/80/40",
        rating: "3.6",
        reviews: "734 reviews",
    },
    {
        id: 4,
        name: "Aviva India",
        logo: "/api/placeholder/80/40",
        rating: "3.6",
        reviews: "734 reviews",
    }
];

export default function Opportunities() {
    return (

        <div className="max-w-8xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-9

      ">

                {/* Left Section */}
                <div className="md:col-span-3">
                    <LeftSection />
                </div>

                {/* Middle Section  */}
                <div className="md:col-span-6">
                    <div className="mb-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Explore jobs by top companies</h2>
                            <a href="#" className="text-blue-500 hover:underline">View all</a>
                        </div>
                    </div>

                    <div className="relative h-80 overflow-y-scroll scrollbar-hide">
                        <div className="grid grid-cols-3 gap-4">
                            {companiesData.map((company) => (
                                <CompanyCard key={company.id} company={company} />
                            ))}
                        </div>

                        {/* Next button */}
                        <button
                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-300 rounded-full shadow flex items-center justify-center"
                            aria-label="Next"
                        >
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>


                {/* Right Section */}
                <div className="md:col-span-3">
                    <RightSection />
                </div>

            </div>
        </div>

    )
}