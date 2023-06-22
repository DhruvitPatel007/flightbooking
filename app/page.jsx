"use client";
import React, { useState, useEffect } from "react";

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
      <section className="mt-5 flex flex-col items-center">
        <div className="relative md:hidden">
          <input
            type="text"
            className={`w-80  py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-slate-100 ${transitionClass}`}
            placeholder={placeholders[currentPlaceholderIndex]}
          />
        </div>

        <div className="flex  space-x-4 mt-5 overscroll-auto">
      <div className="w-50 h-16 p-4 rounded-lg ml-4 bg-gray-200 ">Hiiii9iiiiii</div>
      <div className="w-30 h-16 p-4  rounded-lg bg-gray-200">Heel</div>
      <div className="w-1/2 h-16 p-4 rounded-lg bg-gray-200">ddddd</div>
      <div className="w-1/2 h-16 p-4 rounded-lg bg-gray-200">dddddddd</div>
      <div className="w-1/2 h-16 p-4 rounded-lg bg-gray-200">ddddddd</div>
    </div>
      </section>
    </main>
  );
}
