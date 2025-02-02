
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
  export default ContestCard;