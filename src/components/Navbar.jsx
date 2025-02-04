import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const DropdownMenu = ({ buttonText, menuItems, isSplit = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-700 hover:text-black relative">
        {buttonText}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg transition-opacity duration-500 ease-out opacity-100 scale-100 z-50 w-64"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {isSplit ? (
            <div className="flex">
              {/* Left Section - College */}
              <div className="w-1/2 p-3 border-r border-gray-300">
                <h4 className="font-semibold text-gray-600">College</h4>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a href="#" className="block text-gray-700 hover:text-blue-700">
                      College Login
                    </a>
                  </li>
                </ul>
              </div>
              {/* Right Section - Campus Employer */}
              <div className="w-1/2 p-3">
                <h4 className="font-semibold text-gray-600">Campus Employer</h4>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a href="#" className="block text-gray-700 hover:text-blue-700">
                      Employer Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <ul className="py-3 text-blue-600">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="block px-8 py-1 text-gray-700 hover:text-blue-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-satoshi md:px-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center space-x-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg"
            alt="Naukri Campus Logo"
          />
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8">
            <li className="group relative">
              <DropdownMenu
                buttonText="Prepare"
                menuItems={[
                  "Pathfinder",
                  "NCAT",
                  "Expert Speak",
                  "Resume Maker",
                  "Personalized Interview Q/A",
                  "Career Guidance",
                ]}
              />
            </li>
            <li className="group relative">
              <DropdownMenu
                buttonText="Participate"
                menuItems={[
                  "Contests",
                  "All India NCAT",
                  "Naukri Campus Young Turks",
                  "Naukri Campus Squad",
                  "Engineers' Ring of Honour",
                ]}
              />
            </li>
            <li className="group relative">
              <DropdownMenu buttonText="Opportunities" menuItems={["Jobs", "Internships"]} />
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-200 rounded-full py-2 px-2 mx-10 bg-white">
          <input
            type="text"
            placeholder="Search jobs here"
            className="bg-transparent text-grey-900 outline-none w-40 md:w-30 px-2"
          />
          <FaSearch className="text-white bg-blue-600 rounded-full p-1 text-2xl ml-2" />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 font-semibold">
            Login
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-400 font-semibold">
            Register
          </button>
          <span className="text-gray-700 hidden md:inline">|</span>
          {/* Not a Job Seeker Dropdown */}
          <li className="group relative hidden md:inline-block">
            <DropdownMenu buttonText="Not a jobseeker?" isSplit={true} />
          </li>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
