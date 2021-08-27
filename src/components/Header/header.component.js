import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
  const [hide, setHide] = useState(true);
  const [icon, setIcon] = useState(true);
  return (
    <header className={`shadow-md sticky top-0 z-50 bg-white`}>
      <div className=" max-w-6xl mx-auto px-5  text-gray-500 font-fam4 ">
        <nav className="flex flex-row relative">
          <div className=" relative cursor-pointer  flex items-center">
            <Image
              src="/errands_logo1.png"
              alt="Errands and Services logo"
              // layout="fill"
              // objectFit="contain"
              // objectPosition="left"
              width="50"
              height="50"
            />
          </div>
          <div className=" hidden xxs:inline-flex flex-1 justify-center items-center mx-2 sm:space-x-3 md:space-x-8 lg:my-2">
            <a
              href="#"
              className="hover:bg-gray-200 transition duration-500 ease-in-out text-lg px-4 py-1 lg:py-2 border rounded-full border-transparent lg:text-2xl"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-200 transition duration-500 ease-in-out text-lg px-4 py-1 lg:py-2 border rounded-full border-transparent lg:text-2xl"
            >
              Service
            </a>
            <a
              href="#"
              className="hover:bg-gray-200 transition duration-500 ease-in-out text-lg px-4 py-1 lg:py-2 border rounded-full border-transparent lg:text-2xl"
            >
              People
            </a>
          </div>
          <div className=" hidden xxs:inline-flex items-center space-x-2 ">
            <a
              href="#"
              className="hover:bg-gray-200 transition duration-500 ease-in-out text-lg px-4 py-1 lg:py-2 border rounded-full border-transparent lg:text-2xl"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-1 lg:py-2 border-2 rounded-full shadow-sm bg-sky-400 text-white  hover:shadow-md hover:bg-sky-600 transition duration-250 lg:text-2xl lg:py-2"
            >
              Signup
            </a>
          </div>
          <button
            onClick={() => {
              setHide(!hide);
              setIcon(!icon);
            }}
            className="xxs:hidden flex flex-1 items-center justify-end  border-0 border-transparent no-underline"
          >
            {icon ? <MenuIcon className="h-6" /> : <XIcon className="h-6" />}
          </button>
        </nav>
        <div
          id="mobile-menu"
          className={`${
            hide ? "hidden" : "block"
          } w-min xxs:hidden pb-2 font-fam4`}
        >
          <a
            href="#"
            className="hover:bg-gray-200 active:bg-gray-400 active:bg-gray-400 transition duration-500 ease-in-out text-lg px-4 py-1 border rounded-full border-transparent"

          >
            Home
          </a>
          <a
            href="#"

            className="hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out text-lg px-4 py-1 border rounded-full border-transparent"

          >
            Services
          </a>
          <a
            href="#"

            className="hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out text-lg px-4 py-1 border rounded-full border-transparent"

          >
            People
          </a>
          <a
            href="#"

            className="hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out text-lg px-4 py-1 border rounded-full border-transparent"

          >
            Login
          </a>
          <a
            href="#"

            className="px-4 py-1 border-2 rounded-full shadow-sm bg-sky-400 text-white  hover:shadow-md hover:bg-sky-600 active:bg-sky-500 transition duration-250"

          >
            Signup
          </a>
        </div>

        <button
          onClick={() => {
            setHide(!hide);
            setIcon(!icon);
          }}
          className="xxs:hidden flex flex-1 items-center justify-end  border-0 border-transparent no-underline"
        >
          {icon ? <MenuIcon className="h-6" /> : <XIcon className="h-6" />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`${hide ? "hidden" : "block"} w-min xxs:hidden pb-2`}
      >
        <a
          href="#"
          className="block py-2 px-2 text-lg hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out border border-transparent rounded-full text-center"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2 px-2 text-lg hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out border border-transparent rounded-full text-center"
        >
          Services
        </a>
        <a
          href="#"
          className="block py-2 px-2 text-lg hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out border border-transparent rounded-full text-center"
        >
          People
        </a>
        <a
          href="#"
          className="block py-2 px-2 text-lg hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out border border-transparent rounded-full text-center"
        >
          Login
        </a>
        <a
          href="#"
          className="block py-2 px-2 text-lg hover:bg-gray-200 active:bg-gray-400 transition duration-500 ease-in-out border border-transparent rounded-full text-center"
        >
          Signup
        </a>

      </div>
    </header>
  );
};

export default Header;
