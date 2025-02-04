import logo from "../assets/5466500.gif"
const ContestCard = ({ contest }) => (
  <div className="bg-white border border-grey-800 rounded-3xl shadow-md p-4 hover:shadow-2xl relative">
    <div className="flex items-start gap-4  ">
      <div className="rounded-lg flex-shrink-0">

        <img
          src={logo}
          alt="logo"
          className="h-12 w-12  rounded-lg "
        />

      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{contest.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{contest.company}</p>
        <div className="flex flex-wrap gap-x-4 text-sm text-gray-600 mb-3">
          <span>No. round: {contest.roundNo}</span>
          <span className="text-gray-400 hidden md:inline">|</span>
          <span>Duration: {contest.duration}, {contest.date}</span>
          <span className="text-gray-400 hidden md:inline">|</span>
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
      <div className={`px-3 mr-3 self-start rounded-lg text-grey-700 font-semibold text-sm absolute top-0 right-0 ${contest.type === "Quiz" ? "bg-yellow-50" : "bg-indigo-50"
        }`}>
        {contest?.type}
      </div>
    </div>
  </div>
);
export default ContestCard;