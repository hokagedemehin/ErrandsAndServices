import React from "react";
import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="mx-2">
      <div className="flex max-w-3xl mx-auto">
        <div className="flex w-full flex-col-reverse sm:flex-row">
          <div className="flex flex-col flex-1 justify-center items-center space-y-5">
            <div className="font-extrabold text-lg sm:text-xl font-fam7">
              <p className="text-blueGray-500">
                Join our Pool of professionals <br />
                <span className="text-blue-700">Today</span>
              </p>
            </div>
            <div>
              <button className="ring-2 ring-blue-500 px-2 py-1 rounded-lg font-bold hover:bg-blue-600 hover:ring-white hover:text-white transition duration-200 ease-in">
                Create Profile
              </button>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="relative h-60 w-full">
              <Image
                src="/homepage/joinus/join_us.png"
                layout="fill"
                objectFit="contain"
                alt="service hero image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
