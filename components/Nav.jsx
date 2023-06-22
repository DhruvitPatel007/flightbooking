"use client";

import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import SlidingBanner from "./SlidingBanner";
import "../styles/Banner.css";

const Nav = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  // const [show, setShow] = useState("translate-y-0");
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [categories, setCategories] = useState(null);

  return (
    <>
      <div
        className={`bg-slate-200 w-full h-[60px] md:h-[12vh] bg-white flex items-center justify-between z-20 sticky top transition-transform duration-300`}
      >
        <div
          className={`flex justify-between w-full max-w-[1280px] md: mx-auto`}
        >
          <div className={`flex items-center gap-3`}>
            <Link href="/">
              <Image
                src="/assets/logoadani.png"
                alt="Logo"
                width={50}
                height={50}
                className="object-contain bg-transparent ml-2"
              />
            </Link>
          </div>

          <div className="flex gap-8">
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

            <div className="flex items-center text-center cursor-pointer relative mr-2">
              <BsPerson size={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <SlidingBanner />
      </div>
    </>
  );
};

export default Nav;
