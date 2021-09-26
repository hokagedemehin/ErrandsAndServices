import React from "react";
import { GiShop } from "react-icons/gi";
import { FaStore } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <div
          className={`border-2 rounded-md xxs:rounded-lg bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 p-4
            flex flex-col justify-center items-center w-full cursor-pointer transition duration-500 ease-in-out hover:scale-105`}
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
      </div>
    </div>
  );
};

export default ServiceCard;
