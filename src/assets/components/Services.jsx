import { IoIosSettings } from "react-icons/io";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { LiaBoxesSolid } from "react-icons/lia";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { FaArrowCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 p-4">
      <h2 className="text-yellow-500">WELCOME TO REGISTERKARO.IN</h2>
      <h1 className="text-3xl mt-2 font-bold">Explore Our Services</h1>
      <div className="flex flex-col md:flex-row gap-7 mt-8 flex-wrap justify-center">
        <div className="flex flex-col justify-center items-center border-zinc-400 border-2 p-4 rounded-md shadow-gray-200 w-full md:w-1/3 lg:w-1/4">
          <IoIosSettings className="text-yellow-600 text-5xl" />
          <h2 className="text-black font-medium text-2xl m-4">
            Company Formation
          </h2>
          <p className="text-zinc-600">
            Build web-based solutions that enhance customer experience.
          </p>
          <div className="flex gap-5 items-center mt-6">
            <p className="font-medium">Learn more</p>
            <FaArrowCircleRight />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-zinc-400 border-2 p-4 rounded-md shadow-gray-200 w-full md:w-1/3 lg:w-1/4">
          <MdOutlineScreenSearchDesktop className="text-yellow-600 text-5xl" />
          <h2 className="text-black font-medium text-2xl m-4">
            Company Secretarial Services
          </h2>
          <p className="text-zinc-600">
            Make data-driven decisions and utilize technology to reach business
            goals.
          </p>
          <div className="flex gap-5 items-center mt-6">
            <p className="font-medium">Learn more</p>
            <FaArrowCircleRight />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-zinc-400 border-2 p-4 rounded-md shadow-gray-200 w-full md:w-1/3 lg:w-1/4">
          <FaPeopleLine className="text-yellow-600 text-5xl" />
          <h2 className="text-black font-medium text-2xl m-4">
            Virtual Office Address
          </h2>
          <p className="text-zinc-600">
            Foster customer relationships by effectively serving your market.
          </p>
          <div className="flex gap-5 items-center mt-6">
            <p className="font-medium">Learn more</p>
            <FaArrowCircleRight />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-zinc-400 border-2 p-4 rounded-md shadow-gray-200 w-full md:w-1/3 lg:w-1/4">
          <LiaBoxesSolid className="text-yellow-600 text-5xl" />
          <h2 className="text-black font-medium text-2xl m-4">
            Annual Compliance Services
          </h2>
          <p className="text-zinc-600">
            Turn your ideas into modern products with our design experts.
          </p>
          <div className="flex gap-5 items-center mt-6">
            <p className="font-medium">Learn more</p>
            <FaArrowCircleRight />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-zinc-400 border-2 p-4 rounded-md shadow-gray-200 w-full md:w-1/3 lg:w-1/4">
          <AiOutlineGlobal className="text-yellow-600 text-5xl" />
          <h2 className="text-black font-medium text-2xl m-4">
            Payroll Services
          </h2>
          <p className="text-zinc-600">
            Expand your business across the globe with minimal efforts.
          </p>
          <div className="flex gap-5 items-center mt-6">
            <p className="font-medium">Learn more</p>
            <FaArrowCircleRight />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-zinc-400 border-2 p-4 rounded-md shadow-gray-200 w-full md:w-1/3 lg:w-1/4">
          <GrAnnounce className="text-yellow-600 text-5xl" />
          <h2 className="text-black font-medium text-2xl m-4">
            Bookkeeping Services
          </h2>
          <p className="text-zinc-600">
            Steering user behaviors with creative design, data insights &
            technology.
          </p>
          <div className="flex gap-5 items-center mt-6">
            <p className="font-medium">Learn more</p>
            <FaArrowCircleRight />
          </div>
        </div>
      </div>
      <button className="bg-blue-500 rounded-md p-2 text-white mt-6">
        See All Services
      </button>
    </div>
  );
};

export default Services;
