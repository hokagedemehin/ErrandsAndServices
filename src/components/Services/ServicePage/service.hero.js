import React from "react";
import Image from "next/image";
// import styles from "./service.hero.module.css";

const ServiceHero = () => {
  return (
    <div className="">
      <div className="relative h-60 w-full">
        <div className="relative h-72 w-full bg-gradient-to-tl from-blue-500 ">
          <div className="relative h-full w-full">
            <Image
              src="/servicePage/heroImage/service2.png"
              layout="fill"
              objectFit="cover"
              alt="service hero image"
            />
            <div className="absolute flex justify-center items-center w-full top-1/2">
              <p className="font-bold text-4xl sm:text-5xl font-fam7 text-blue-600">
                Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
