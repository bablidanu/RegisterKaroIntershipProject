import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="h-[44px] text-white bg-blue-950 flex items-center justify-end gap-4 p-2">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <p className="ml-2 hidden md:block">www.registerkaro.in</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <div className="ml-2 hidden md:block">+918447746183</div>
        </div>
        <div className="flex gap-5 text-xl">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>

      {/* Main Header */}
      <div className="m-1.5 flex flex-col md:flex-row items-center justify-between mt-1.5 h-[72px]">
        <div className="flex items-center h-[44px]">
          <img src={`registerkaro.png`} alt="Logo" className="h-10 p-2 mr-4" />
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-blue-600 font-semibold">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {/* Navigation Menu */}
        <div
          className={`flex ml-4 ${isMenuOpen ? "flex-col" : "hidden"} md:flex`}
        >
          <ul className="list-none flex flex-col md:flex-row gap-4 md:gap-6 font-semibold text-zinc-600">
            <li className="hover:text-amber-500">Home</li>
            <li className="hover:text-amber-500">Select Options</li>
            <li className="hover:text-amber-500">Blog</li>
            <li className="hover:text-amber-500">Contact Us</li>
            <li className="hover:text-amber-500">About Us</li>
            <li className="hidden md:block">
              <CiSearch className="text-xl hover:text-amber-500" />
            </li>
            <li className="text-white bg-amber-600 hover:bg-amber-500 cursor-pointer p-2 rounded-sm">
              Talk An Expert
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
