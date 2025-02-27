import { FaEnvelope } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="h-[44px] text-white bg-blue-950 flex items-center justify-end gap-4 p-2">
        <FaEnvelope />
        <div className="flex gap-2">
          <p className="ml-2">www.registerkaro.in</p>
        </div>
        |
        <FaPhoneAlt />
        <div className="flex gap-1 p-2">
          <div className="ml-2">+918447746183</div>
        </div>
        |
        <div className="flex gap-5 text-xl p-2">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>
      <header className="m-1.5 flex flex-col md:flex-row items-center justify-between mt-1.5 h-[72px]">
        <div className="flex items-center h-[44px]">
          <img src={`registerkaro.png`} alt="Logo" className="h-10 p-2 mr-4" />
        </div>
        <div className="flex ml-4">
          <ul className="list-none flex flex-col md:flex-row gap-4 md:gap-6 font-semibold text-zinc-600">
            <li>Home</li>
            <li>Select Options</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li className="hidden md:block">
              <CiSearch className="text-xl" />
            </li>
            <li className="text-white bg-amber-600 p-2 rounded-sm">
              Talk An Expert
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
