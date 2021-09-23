import React from "react";
import { GiShop } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
const ServiceCard = () => {
  return (
    <div>
      <div
        className={`border-2 rounded-lg bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 p-4
            flex flex-col justify-center items-center w-full`}
        // style={{ width: "fit-content" }}
      >
        <div className="">
          <FaStore className="text-xl xxs:text-2xl lg:text-4xl text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-white text-center">
            Market Runs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
