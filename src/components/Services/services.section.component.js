import React from "react";
// import ServiceCard from "./service.card.component";
import { FaStore } from "react-icons/fa";
import { GiVacuumCleaner, GiCampCookingPot } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";
import { useRouter } from "next/router";

const ServicesSection = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/services");
    // console.log(router.push("/services"));
  };

  return (
    <div className="max-w-4xl mx-auto px-2 ">
      <div
        className="flex justify-center items-center font-fam5 font-black text-blue-800 text-3xl xxs:text-4xl sm:text-5xl md:text-6xl
        my-4 space-x-4"
      >
        <span className="text-blueGray-400">Our</span> <span>Services</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <div
          className={`border-2 rounded-md xxs:rounded-lg bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 
          p-8 flex flex-col justify-center items-center w-full transition duration-500 ease-in-out hover:scale-105`}
          // style={{ width: "fit-content" }}
        >
          <div className="">
            <FaStore className="text-xl xxs:text-2xl md:text-4xl text-white" />
          </div>
          <div>
            <p className="text-sm xxs:text-lg md:text-xl font-bold text-white text-center">
              Market Runs
            </p>
          </div>
        </div>
        <div
          className={`border-2 rounded-lg bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 p-8
            flex flex-col justify-center items-center w-full transition duration-500 ease-in-out hover:scale-105`}
          // style={{ width: "fit-content" }}
        >
          <div className="">
            <GiVacuumCleaner className="text-xl xxs:text-2xl md:text-4xl text-white" />
          </div>
          <div>
            <p className="text-sm xxs:text-lg md:text-xl font-bold text-white text-center">
              Cleaner
            </p>
          </div>
        </div>
        <div
          className={`border-2 rounded-lg bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 p-8
            flex flex-col justify-center items-center w-full transition duration-500 ease-in-out hover:scale-105`}
          // style={{ width: "fit-content" }}
        >
          <div className="">
            <GiCampCookingPot className="text-xl xxs:text-2xl md:text-4xl text-white" />
          </div>
          <div>
            <p className="text-sm xxs:text-lg md:text-xl font-bold text-white text-center">
              Cooks
            </p>
          </div>
        </div>
        <div
          className={`border-2 rounded-lg bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 p-8
            flex flex-col justify-center items-center w-full transition duration-500 ease-in-out hover:scale-105`}
          // style={{ width: "fit-content" }}
        >
          <div className="">
            <RiMotorbikeFill className="text-xl xxs:text-2xl md:text-4xl text-white" />
          </div>
          <div>
            <p className="text-sm xxs:text-lg md:text-xl font-bold text-white text-center">
              Dispatch Rider
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-3">
        {/* <button
          // onClick={() => alert("show all services")}
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-700 to-sky-500 py-1 active:bg-gradient-to-r active:from-blue-500 active:to-sky-300 xxs:py-2 px-3 xxs:px-4 font-bold xxs:font-extrabold text-sm xxs:text-lg md:text-2xl text-white rounded-full hover:scale-105 hover:shadow-lg transition duration-500 ease-in-out"
        >
          View All Services
        </button> */}
        <div
          onClick={handleClick}
          className="rounded-lg px-4 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            View Services
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
