"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavBar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="w-full fixed top-0 z-10 bg-[#000000]">
      <div className="w-screen h-[100px] lg:h-[150px] flex flex-col mx-auto py-4 justify-center items-center lg:flex-row lg:w-3/4 lg:justify-between">
        <div className="w-full flex justify-between px-4 cursor-pointer lg:w-1/2">
          <div className="relative w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
            <Link href="/">
              <Image
                src="/icons/cineganglogo.svg"
                alt="CinegangTV logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <div
            onClick={toggleNavBar}
            className={`${styles.hamburgerWrapper} ${
              showNav ? styles.open : ""
            }`}
          >
            <div className={`${styles.hamburger}`}></div>
          </div>
        </div>
        <ul
          className={`${
            !showNav ? "translate-x-[100%]" : ""
          } absolute top-[100px] w-full h-max bg-[#000000] flex flex-col justify-center items-center py-4 transition ease-in-out delay-150 lg:bg-inherit lg:gap-x-4 lg:flex-row lg:static lg:w-1/2 lg:translate-x-0 2xl:justify-end`}
          onClick={toggleNavBar}
        >
          <Link
            href="/portfolio"
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-[#f43f3f]"
          >
            Portfolio
          </Link>
          <Link
            href="/our-services"
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-[#f43f3f]"
          >
            Our Services
          </Link>
          <Link
            href="/our-spaces"
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-[#f43f3f]"
          >
            Our Spaces
          </Link>
          <Link
            href="/contact-us"
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-[#f43f3f]"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
