const CompanyCard = ({ company }) => (
  <div className="bg-white  rounded-3xl border border-grey-800 hover:shadow-xl p-5 ">
    <div className="flex  flex-col items-center">
      <div className="bg-white border border-grey-600 p-1 rounded-lg ">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="h-8 w-10   "
        />

      </div>

      <h3 className="text-lg font-semibold m-2">{company.name}</h3>
      <div className="flex items-center gap-2 mb-3 whitespace-nowrap">
        <span className="text-yellow-500 font-bold">★ </span>
        <span className="text-grey-800 font-medium">{company.rating}</span>
        <span className="text-gray-400"> | </span>
        <span className="text-gray-600">{company.reviews}</span>
      </div>

      <button className="text-blue-700 hover:underline">View jobs</button>
    </div>
  </div>
);
export default CompanyCard;