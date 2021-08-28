import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { CogIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";

export const Hero = () => {
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
              <button
                onClick={() => alert("it works")}
                className="bg-gradient-to-r from-blue-700 to-sky-500 py-1 active:bg-gradient-to-r active:from-blue-500 active:to-sky-300 xxs:py-2 px-3 xxs:px-4 font-bold xxs:font-extrabold text-sm xxs:text-lg md:text-2xl text-white rounded-full hover:scale-110 hover:shadow-lg transition duration-200 ease-in-out"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
