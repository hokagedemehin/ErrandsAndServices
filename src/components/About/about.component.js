import React from "react";
import { FaBeer } from "react-icons/fa";

export const About = () => {
  return (
    <div
      className={`
      max-w-4xl mx-auto
       bg-no-repeat bg-center bg-cover `}
      style={{
        backgroundImage: `url("./about/blob-haikei3.svg")`,
        aspectRatio: "900/540",
      }}
    >
      <section>
        <h1
          className={`
        font-fam5 font-black text-center text-3xl xxs:text-4xl sm:text-5xl md:text-6xl
        my-4
        `}
        >
          About <span className="text-blueGray-400">us</span>
        </h1>
        <p
          className={`
            font-fam1 font-medium text-justify text-lg lg:text-2xl
            px-4
        `}
        >
          This is Errands & Services, we are the platform where you can find
          capable personels to run errands and provide quality services of all
          kinds be it domestic services, electrical services, mechanical
          services and the likes.
        </p>
        <br />
        <p
          className={`
            font-fam1 font-medium text-justify text-lg lg:text-2xl
            px-4
        `}
        >
          We get the kind of people that meet your specific needs at the right
          time. There is nothing more frustrating than scouring the streets and
          endless internet searches for someone to help you complete your task.
          From big cities to small towns, we’ve got pros covering every local
          government area in Nigeria.
        </p>
      </section>
      {/* <FaBeer className="text-4xl text-red-500 " /> */}
    </div>
  );
};
