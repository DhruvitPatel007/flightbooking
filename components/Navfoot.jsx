"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { MdMenuBook } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

const Navfoot = () => {
  return (
    <li className="w-full fixed flex gap-2 md:hidden  bottom-0 bg-gray-800 text-white p-4 justify-between">
      <div>
        <Link href="/">
          <div className="flex flex-col items-center">
          <AiOutlineHome size={25}/>
          Home
          </div>
          
        </Link>
      </div>

      <div>
        <Link href="/services">
          <div className="flex flex-col items-center">
          <MdMenuBook size={25}/>
          Services
          </div>
          
        </Link>
      </div>

      <div>
        <Link href="/travelogues">
          <div className="flex flex-col items-center">
          <CgMenuGridR size={25}/>
          Orders
          </div>
          
        </Link>
      </div>

      <div>
        <Link href="/shop">
          <div className="flex flex-col items-center">
          <BiCart size={25}/>
          Cart
          </div>
          
        </Link>
      </div>

      <div>
        <Link href="/shop">
          <div className="flex flex-col items-center">
          <FiMoreHorizontal size={25}/>
          More
          </div>
          
        </Link>
      </div>
    </li>
  )
}

export default Navfoot