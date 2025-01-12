import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Digi.png";
import Button from "../components/Button";


const Header = () => {
  return (
    <header className="bg-[#071952] text-gray-800 shadow-md w-full border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
          <img src={logo} alt="Digilekh Logo" className="w-16 h-16 rounded-full" />
        </Link>

        {/* Navigation Links */}
        <nav className=" md:flex items-center space-x-6 text-lg">
          <Link to="/" className="text-[#B9E5E8] transition duration-200 hover:text-[#FF8225]">
            Home
          </Link>
          <Link to="/features" className="text-[#B9E5E8] transition duration-200 hover:text-[#FF8225]">
            Features
          </Link>
          <Link to="/about" className="text-[#B9E5E8] transition duration-200 hover:text-[#FF8225]">
            About Us
          </Link>
          <Link to="/contact" className="text-[#B9E5E8] transition duration-200 hover:text-[#FF8225]">
            Contact Us
          </Link>
          <Link to="/user/signup">
            <Button />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
