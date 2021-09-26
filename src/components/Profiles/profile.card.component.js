import React from "react";
import Image from "next/image";

const ProfileSectionCard = () => {
  return (
    <div>
      <div
        className={`relative border-2 mb-6 rounded-md xxs:rounded-lg flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-700 via-blue-600 to-sky-500 cursor-pointer transition duration-500 ease-in-out hover:scale-105`}
      >
        <div className="-my-6">
          <div className="relative h-14 w-14 border-4 border-white rounded-full overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src="https://avatars.dicebear.com/api/micah/random.svg?background=%23050749"
              // src="/profile/prof1.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-5 p-2">
          <div>
            <span className="text-blueGray-400 font-bold font-fam5 text-sm sm:text-base">
              Name:{" "}
            </span>
            <span className="text-white font-bold font-fam5 text-sm sm:text-base">
              Mercy Johnson
            </span>
          </div>
          <div>
            <span className="text-blueGray-400 font-bold font-fam5 text-sm sm:text-base">
              Service:{" "}
            </span>{" "}
            <span className="text-white font-bold font-fam5 text-sm sm:text-base">
              Plumber
            </span>
          </div>
          <div>
            <span className="text-blueGray-400 font-bold font-fam5 text-sm sm:text-base">
              Location:{" "}
            </span>{" "}
            <span className="text-white font-bold font-fam5 text-sm sm:text-base">
              Lagos, Lekki
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionCard;
