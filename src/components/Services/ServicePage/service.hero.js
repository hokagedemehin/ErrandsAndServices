import React from "react";
import Image from "next/image";
// import styles from "./service.hero.module.css";

const ServiceHero = () => {
  return (
    <div className="">
      <div className="relative h-80 w-full">
        <div className="relative h-64 w-full bg-gradient-to-tl from-blue-500 ">
          <Image
            src="/servicePage/heroImage/service5.png"
            layout="fill"
            objectFit="contain"
            alt="service hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
