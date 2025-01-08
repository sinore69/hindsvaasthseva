import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import LocationIcon from "../assets/location_icon.svg";
import { FaBookMedical } from "react-icons/fa";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function TopBarSmall() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:hidden flex w-full text-sm font-bold justify-between items-center top-0 left-0 z-20 fixed px-4 sm:px-8 py-1 bg-secondary shadow-lg">
      <div className="max-w-screen-lg w-full flex flex-col justify-between items-center relative">
        {/* Logo */}
        <div className="px-2 w-full">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-auto" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="absolute top-4 right-4 md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={20} className="text-primary" />
            ) : (
              <FaBars size={20} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full flex flex-col items-center my-7 space-y-4`}
        >
          {/* Location */}
          <div className="flex flex-row px-4 items-center space-x-2">
            <img src={LocationIcon} alt="location_icon" className="h-5" />
            <div className="flex flex-col">
              <div className="font-bold">Select Location</div>
              <div className="text-primary font-bold">Kolkata</div>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full flex-1 px-4 sm:px-6">
            <input
              type="text"
              placeholder="Search as you wish..."
              className="w-full py-2.5 text-sm border border-gray-300 rounded-full pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <div className="absolute bg-primary rounded-full p-2 right-6 top-1/2 transform -translate-y-1/2">
              <FaSearch size={18} color="#fff" />
            </div>
          </div>

          <div className="flex flex-row w-full justify-between items-center">
            {/* Orders */}
            <div className="px-4 flex items-center space-x-2">
              <FaBookMedical size={18} />
              <a href="/orders" className="hover:text-primary">
                Your Bookings
              </a>
            </div>

            {/* Login/Signup */}
            <Link to={"/auth"}>
              <div className="px-4 flex items-center space-x-2">
                <FaUser size={18} />
                <span>Login/Signup</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
