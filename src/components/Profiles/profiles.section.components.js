import { useRouter } from "next/router";
import React from "react";
// import Image from "next/image";
import ProfileSectionCard from "./profile.card.component";

const ProfileSection = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/profiles");
    // console.log(router.push("/services"));
  };

  return (
    <div className="max-w-4xl mx-auto px-2 mt-20">
      <div
        className="flex justify-center items-center font-fam5 font-black text-blue-800 text-3xl xxs:text-4xl sm:text-5xl md:text-6xl
        my-4 space-x-4 mb-8"
      >
        <span>Our</span> <span className="text-blueGray-400">Profiles</span>
      </div>
      <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 gap-x-2">
        <ProfileSectionCard />
        <ProfileSectionCard />
        <ProfileSectionCard />
      </div>
      <div className="flex justify-center items-center">
        {/* <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-700 to-sky-500 py-1 active:bg-gradient-to-r active:from-blue-500 active:to-sky-300 xxs:py-2 px-3 xxs:px-4 font-bold xxs:font-extrabold text-sm xxs:text-lg md:text-2xl text-white rounded-full hover:scale-105 hover:shadow-lg transition duration-500 ease-in-out"
        >
          View All Profiles
        </button> */}
        <div
          href="#_"
          onClick={handleClick}
          className="px-5 py-3 relative rounded-lg group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block cursor-pointer"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">View Profiles</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
