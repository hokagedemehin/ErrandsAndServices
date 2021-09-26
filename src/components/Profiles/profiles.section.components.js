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
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-700 to-sky-500 py-1 active:bg-gradient-to-r active:from-blue-500 active:to-sky-300 xxs:py-2 px-3 xxs:px-4 font-bold xxs:font-extrabold text-sm xxs:text-lg md:text-2xl text-white rounded-full hover:scale-105 hover:shadow-lg transition duration-500 ease-in-out"
        >
          View All Profiles
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
