"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import AirportServices from "@/components/AirportServices";

export default function Home() {
  const placeholders = [
    'Search "Airport Services"',
    'Search "Duty Free"',
    'Search "Book Fligths"',
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionClass("transition-opacity");
      setTimeout(() => {
        setCurrentPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % placeholders.length
        );
        setTransitionClass("");
      }, 300);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      
      <Nav/>

      <section className="mt-5 flex flex-col items-center">
        <div className="relative md:hidden">
          <input
            type="text"
            className={`w-80  py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-slate-100 ${transitionClass}`}
            placeholder={placeholders[currentPlaceholderIndex]}
          />
        </div>
      </section>

      <AirportServices/>
      
    </main>
  );
}
