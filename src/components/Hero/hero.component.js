import React from "react";
// import Image from "next/image";
import Typewriter from "typewriter-effect";

import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/services");
    // console.log(router.push("/services"));
  };

  return (
    <>
      <div
        className="relative"
        style={{
          aspectRatio: "900/600",
          width: "100%",
          // backgroundColor: "green",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundImage: `url("./errands_logo1.png")`,
          backgroundImage: `url("./hero/layered-waves-haikei3.svg"), 
          url("./hero/blurry-gradient-haikei1.svg") 
          `,
        }}
      >
        <div>
          <div
            className="flex flex-col items-center justify-center "
            style={{
              aspectRatio: "900/400",
              width: "100%",
            }}
          >
            <p className="font-bold xxs:font-extrabold text-lg xxs:text-3xl  sm:text-5xl md:text-7xl font-fam5 text-white drop-shadow-xl">
              Errands & Services
            </p>
            <p className="font-bold xxs:font-extrabold text-lg xxs:text-3xl  sm:text-5xl md:text-7xl font-fam5 text-white drop-shadow-xl -mt-2 xxs:mt-0">
              can get you
            </p>
            <div className="font-bold xxs:font-extrabold text-lg xxs:text-3xl sm:text-5xl md:text-7xl text-purple-500 font-fam7 pt-0 sm:pt-2 -mt-2 xxs:mt-0">
              <Typewriter
                options={{
                  strings: [
                    "a Chef",
                    "an Usher",
                    "a Mechanic",
                    "a Dispatch Rider",
                    "a Cleaner",
                    "",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="m-1 sm:m-4">
              {/* <button
                // onClick={() => alert("it works")}
                onClick={handleClick}
                className="bg-gradient-to-r from-blue-700 to-sky-500 py-1 active:bg-gradient-to-r active:from-blue-500 active:to-sky-300 xxs:py-2 px-3 xxs:px-4 font-bold xxs:font-extrabold text-sm xxs:text-lg md:text-2xl text-white rounded-full hover:scale-110 hover:shadow-lg transition duration-200 ease-in-out"
              >
                View Services
              </button> */}
              <a
                href="#_"
                onClick={handleClick}
                className="relative inline-flex items-center justify-start py-2 sm:py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  View Services
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
