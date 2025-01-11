import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LocationIcon from "../assets/location_icon.svg";
import { FaBookMedical } from "react-icons/fa";
import { FaSearch, FaUser } from "react-icons/fa";

export default function TopBar() {
  return (
    <nav className="md:flex w-full text-sm font-bold justify-center top-5 z-20 fixed px-8">
      <div className="max-w-screen-lg w-full flex flex-row justify-between items-center px-2 md:px-6 py-4 bg-secondary rounded-lg shadow-lg">
        {/* Logo */}
        <div className="md:px-4">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-full" />
          </Link>
        </div>
        {/* Location */}
        <div className="hidden md:flex flex-row px-4 items-center space-x-2">
          <img src={LocationIcon} alt="location_icon" className="h-5" />
          <div className="flex flex-col">
            <div className="font-bold">Select Location</div>
            <div className="text-primary font-bold">Kolkata</div>
          </div>
        </div>
        {/* Search Box */}
        <Link to={"/search-doctors"}>
        <div className="relative flex-1 px-4 md:px-6">
          <input
            type="text"
            placeholder="Search as you wish..."
            className="w-full py-2.5 text-sm border border-gray-300 rounded-full pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <div className="absolute bg-primary rounded-full p-2 right-4 md:right-6 top-1/2 transform -translate-y-1/2">
            <FaSearch size={18} color="#fff" />
          </div>
        </div>
        </Link>
        {/* Orders */}
        <Link to={"/orders"}>
          <div className="px-2 md:px-4 flex items-center space-x-2">
          <FaBookMedical size={18} />
              <div className="hidden md:block hover:text-primary">Your Bookings</div>
          </div>
        </Link>
        {/* Login/Signup */}
        <Link to={localStorage.getItem("token") ? "/profile" : "/auth"}>
          <div className="md:px-4 flex items-center space-x-2">
            <FaUser size={18} />
              <div className="hidden md:block">{localStorage.getItem("userEmail") ? `Hi ${localStorage.getItem("userEmail")}` : "Login/Signup"}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
