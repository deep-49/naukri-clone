import React from 'react';

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

const ContestCard = ({ contest }) => (
  <div className="bg-white border border-grey-800  rounded-3xl shadow-md p-4 hover:shadow-2xl">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex-shrink-0" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{contest.title}</h3>
        <p className="text-gray-500 mb-2">{contest.company}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
          <span>No. round: {contest.roundNo}</span>
          <span>Duration: {contest.duration}, {contest.date}</span>
          <span>Participation: {contest.participation}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {contest.tags.map((tag) => (
            <span key={tag} className="text-slate-500 border border-grey-800  rounded-2xl px-3 py-1 text-sm">#{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-purple-600 border border-grey-800 font-semibold rounded-2xl px-3 py-1">
            <span className="font-semibold">{contest.enrolled}</span> Enrolled
          </span>
          <span className="text-gray-600">
            Reg. closes on {contest.registrationClose}
          </span>
        </div>
      </div>
      <div className="bg-yellow-50 px-3  rounded-3xl text-sm">
        {contest.type}
      </div>
    </div>
  </div>
);

const Participate= () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-9

      ">
        {/* Left Profile Section */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg border border-grey-800 shadow-md p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Build your profile</h2>
            <p className="text-gray-500 mb-4">Get access to personalised career guidance</p>
            <div className="space-y-3">
              <button className="w-45 m-3 py-2 px-4 border border-blue-700 text-blue-700 font-semibold rounded-3xl hover:bg-blue-50 transition-colors">
                Log in
              </button>
              <button className="w-45 py-2 px-4 bg-red-500 text-white rounded-3xl hover:bg-red-600 transition-colors">
                Register
              </button>
            </div>
          </div>
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
        

        {/* Right Section - Job Ad */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md border border-grey-800 overflow-hidden">
            <div className="relative">
              <img 
                src="/api/placeholder/400/250" 
                alt="Computer Science Jobs"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  Top Computer Science Jobs for Freshers in India
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The rapid evolution of technology has created immense opportunities for fresh computer science graduates....
                </p>
                <a href="#" className="text-blue-700 text-xl  font-bold hover:underline">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;