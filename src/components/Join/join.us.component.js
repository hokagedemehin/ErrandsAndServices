import React from "react";
import Image from "next/image";
// import { Link } from "react-router-dom";
// import Link from "next/link";
import { useRouter } from "next/router";

const JoinUs = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/createprofile");
    // console.log(router.push("/services"));
  };
  return (
    <div className="mx-2 mb-4">
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
              {/* <button className="ring-2 ring-blue-500 px-2 py-1 rounded-lg font-bold hover:bg-blue-600 hover:ring-white hover:text-white transition duration-200 ease-in">
                Create Profile
              </button> */}
              <div
                onClick={handleClick}
                className="relative inline-block text-lg group cursor-pointer"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Create Profile</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </div>
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
