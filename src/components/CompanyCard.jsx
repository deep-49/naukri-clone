const CompanyCard = ({ company }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col items-center">
        <img 
          src={company.logo} 
          alt={`${company.name} logo`}
          className="h-8 mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-400">★</span>
          <span>{company.rating}</span>
          <span className="text-gray-500">{company.reviews}</span>
        </div>
        <button className="text-blue-500 hover:underline">View jobs</button>
      </div>
    </div>
  );
  export default CompanyCard;