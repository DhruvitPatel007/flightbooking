"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";

const data = [
  { id: 1, name: "Flights", subMenu: true },
  { id: 2, name: "Shop & Dine", url: "/shop" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Travelogues", url: "/travelogues" },
  { id: 5, name: "Adani Rewards", url: "/rewards" },
  { id: 6, name: "Offers", url: "/offers" },
];

const subMenuData = [
  { id: 1, name: "Book Flight" },
  { id: 2, name: "Flight Status" },
  { id: 3, name: "Group Flight Booking" },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <div className="md:flex items-center gap-8">
      <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className="cursor-pointer flex items-center gap-2 relative"
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  {item.name}
                  {showCatMenu && (
                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg">
                      {subMenuData.map((submenu) => {
                        return (
                          <Link
                            key={submenu.id}
                            href="/"
                            onClick={() => setShowCatMenu(false)}
                          >
                            <li className="h-10 flex items-center px-3 hover:bg-black/[0.03] rounded-md">
                              {submenu.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="cursor-pointer">
                  <Link href={item.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
        <div className="flex justify-center items-center cursor-pointer relative">
          <BiCart size={20} />
        </div>
      </ul>
    </div>
  );
};

export default Menu;
