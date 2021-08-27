import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";
// import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className={`flex flex-col mt-6 `}>
      <div className="">
        <div className="bg-blueGray-700">
          <div
            className={`flex flex-col justify-center items-center  text-white xxs:flex-row max-w-6xl mx-auto`}
          >
            <div className={`flex flex-1 p-3 flex-row space-x-4  lg:m-2 `}>
              <FaFacebook
                className={`text-[#4267B2] text-xl xxs:text-2xl lg:text-4xl `}
              />
              <FaTwitter
                className={`text-[#00acee] text-xl xxs:text-2xl lg:text-4xl `}
              />
              <FaInstagram
                className={` bg-gradient-to-b from-[#8a3ab9] via-[#fbad50] to-[#cd486b]  text-xl xxs:text-2xl lg:text-4xl rounded-lg`}
              />
              <FaLinkedin
                className={`text-[#0077b5] text-xl xxs:text-2xl lg:text-4xl `}
              />
              <FaWhatsapp
                className={`bg-[#25d366] rounded-lg text-xl xxs:text-2xl lg:text-4xl `}
              />
            </div>
            <div
              className={`flex flex-1 space-x-4 text-sm xxs:text-base text-gray-300 mb-4 xxs:mb-0 font-fam4 lg:text-xl `}
            >
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">People</a>
              <a href="#">Login</a>
            </div>
          </div>
        </div>
        <div className="bg-blueGray-800">
          <div
            className={`flex flex-col justify-center items-center  text-white xxs:flex-row max-w-6xl mx-auto`}
          >
            <div
              className={`flex flex-1 space-x-4 m-2 lg:m-4 lg:space-x-6 justify-between`}
            >
              <div
                className={` font-fam2 text-gray-400 tracking-wide lg:text-2xl`}
              >
                <p>Phone:</p>
                <p>0803-611-1411</p>
              </div>
              <div
                className={` font-fam2 text-gray-400 tracking-wide lg:text-2xl`}
              >
                <p>Email:</p>
                <p>errands@gmail.com</p>
              </div>
            </div>
            <div className={`flex flex-1 mb-2 xxs:mb-0`}>
              <div className="lg:text-2xl relative">
                <Image
                  src="/errands_fav.jpeg"
                  layout="fill"
                  objectFit="contain"
                  width="200"
                  height="200"
                />
                {/* <p>Errands & Services</p> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex p-4 justify-center items-center bg-blueGray-900 text-white`}
        >
          <span className={`text-gray-600 lg:text-lg font-fam5 font-semibold`}>
            Copyright &copy; {new Date().getFullYear()} Errands and Services
          </span>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
