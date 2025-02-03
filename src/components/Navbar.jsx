import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white shadow-md">
    <div className="container mx-auto  px-4 py-4 flex items-center justify-center space-x-10">
        {/* Logo */}
        <div className="flex items-center">
            <img src="https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg" alt="Naukri Campus Logo" className="" />
        </div>
        <nav>
            <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="text-grey-700 hover:text-blue-600 font-medium">Prepare</a></li>
            <li><a href="#" className="text-grey-700 hover:text-blue-600 font-medium">Participate</a></li>
            <li><a href="#" className="text-grey-700 hover:text-blue-600 font-medium">Opportunities</a></li>
            </ul>
        </nav>
    
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="text"
          placeholder="Search jobs here"
          className="bg-transparent outline-none w-48 md:w-64"
        />
        <FaSearch className="text-blue-600" />
      </div>
      
      {/* Buttons */}
      <div className="flex items-center space-x-4 font-medium">
        <button className="bg-grey-700 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-grey-600">Login</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-400">Register</button>
        <span className="text-gray-700 hidden md:inline">|</span>
        <a href="#" className="text-gray-700 hidden md:inline hover:text-blue-600">Not a jobseeker?</a>
      </div>
    </div>
    </header>
  );
}


export default Navbar;