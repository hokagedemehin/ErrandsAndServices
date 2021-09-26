import React from "react";
import Image from "next/image";

const ServiceImageCard = ({ name, image }) => {
  return (
    <div>
      <div className="shadow-md overflow-hidden rounded-lg">
        <div
          className="relative h-40 w-full group transition duration-500 ease-in-out overflow-hidden rounded-lg cursor-pointer "
          onClick={() => alert("show all services")}
        >
          <Image src={image} layout="fill" objectFit="cover" alt="image name" />
          <div className="absolute h-full w-full bg-gray-800 opacity-50 group-hover:opacity-5 transition duration-500 ease-in-out overflow-hidden rounded-lg"></div>

          <div className="flex justify-center items-center">
            <div className="absolute bottom-5 ">
              <button
                // onClick={handleClick}
                className="px-1 font-bold text-base rounded-lg group-hover:scale-105 group-hover:shadow-md transition duration-500 ease-in-out text-white group-hover:border-2 group-hover:border-white group-hover:bg-sky-400 xxs:text-lg"
              >
                {name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImageCard;
