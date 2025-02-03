import React, { useRef, useState, useEffect } from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import CompanyCard from "../components/CompanyCard";

const companiesData = [
  {
    id: 1,
    name: "Atlas Jewellery",
    logo: "https://img.naukimg.com/logo_images/groups/v1/550568.gif",
    rating: "NaN",
    reviews: "6 reviews",
  },
  {
    id: 2,
    name: "Digit Insurance",
    logo: "https://img.naukimg.com/logo_images/groups/v1/4598407.gif",
    rating: "4.0",
    reviews: "1.1K+ reviews",
  },
  {
    id: 3,
    name: "Aviva India",
    logo: "https://img.naukimg.com/logo_images/groups/v1/749064.gif",
    rating: "3.6",
    reviews: "734 reviews",
  },
  {
    id: 4,
    name: "Aviva India",
    logo: "https://img.naukimg.com/logo_images/groups/v1/749064.gif",
    rating: "3.6",
    reviews: "734 reviews",
  },
];

export default function Opportunities() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll Function
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; 
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position to toggle buttons
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll(); 
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
        {/* Left Section */}
        <div className="md:col-span-3">
          <LeftSection />
        </div>

        {/* Middle section */}
        <div className="md:col-span-6 bg-white border border-white rounded-3xl shadow-lg p-7">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Explore jobs by top companies</h2>
              <a href="#" className="text-blue-700 text-xl font-semibold hover:underline">
                View all
              </a>
            </div>
          </div>

          {/* Scrollable Job Cards Container */}
          <div className="relative">
            
            <div ref={scrollContainerRef} className="flex gap-4 bg-white p-2 rounded-lg overflow-x-scroll scrollbar-hide scroll-smooth">
              {Array.isArray(companiesData) && companiesData.length > 0 ? (
                companiesData.map((company) => <CompanyCard key={company.id} company={company} />)
              ) : (
                <p className="text-gray-500">No companies available</p>
              )}
            </div>

            {/* Left Scroll Button */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-gray-600 rounded-full shadow flex items-center justify-center"
                aria-label="Scroll Left"
              >
                <svg className="w-5 h-5 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Scroll Button  */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-gray-600 rounded-full shadow flex items-center justify-center"
                aria-label="Scroll Right"
              >
                <svg className="w-5 h-5 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-3">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
