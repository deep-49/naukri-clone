import React from 'react';
import ContestCard from '../components/ContestCard';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';




const contestsData = [
  {
    id: 1,
    title: "Techquezt # 16 - Cybersecurity",
    company: "naukri campus",
    roundNo: 1,
    duration: "30 mins",
    date: "2 Feb",
    participation: "Individual",
    tags: ["TechContest", "TechQuezt", "Tech", "Cybersecurity"],
    enrolled: 12184,
    registrationClose: "02 Feb, 07:00 pm",
    type: "Quiz"
  },
  {
    id: 2,
    title: "Codequezt # 16: Coding Challenge",
    company: "naukri campus",
    roundNo: 1,
    duration: "2 hr",
    date: "9 Feb",
    participation: "Individual",
    tags: ["CodingContest", "Programming", "LearnCoding", "CodeQuezt"],
    enrolled: 5919,
    registrationClose: "09 Feb, 07:00 pm",
    type: "Coding contest"
  },
  {
    id: 3,
    title: "Codequezt # 16: Coding Challenge",
    company: "naukri campus",
    roundNo: 1,
    duration: "2 hr",
    date: "9 Feb",
    participation: "Individual",
    tags: ["CodingContest", "Programming", "LearnCoding", "CodeQuezt"],
    enrolled: 5919,
    registrationClose: "09 Feb, 07:00 pm",
    type: "Quiz"
  },
  {
    id: 4,
    title: "Codequezt # 16: Coding Challenge",
    company: "naukri campus",
    roundNo: 1,
    duration: "2 hr",
    date: "9 Feb",
    participation: "Individual",
    tags: ["CodingContest", "Programming", "LearnCoding", "CodeQuezt"],
    enrolled: 5919,
    registrationClose: "09 Feb, 07:00 pm",
    type: "Coding contest"
  }
];


const Participate= () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-9

      ">
        
        {/* Left Section */}
        <div className="md:col-span-3">
          <LeftSection />
        </div>
       
        

        {/* Main Content Section */}
        
        <div className="md:col-span-6 bg-white border border-white rounded-3xl  h-screen overflow-y-scroll scrollbar-hide  shadow-lg p-7 ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl m-2 font-bold">Participate in exciting contests</h2>
            <a href="#" className="text-blue-700 text-xl font-bold hover:underline">View all</a>
          </div>

          {/* Contest Cards */}
          <div className="space-y-4">
            {contestsData.map((contest) => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </div>
        

      
        {/* Right Section */}
        <div className="md:col-span-3">
          <RightSection />
        </div>
        
      </div>
    </div>
  );
};

export default Participate;