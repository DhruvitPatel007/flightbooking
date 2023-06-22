"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import "../styles/Banner.css";
import { useState } from "react";
import { useEffect } from "react";

const SlidingBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Enjoy Authentic Savings!",
      subtitle: "Up to 5,000 on flights booking using AU",
      imageUrl:
        "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Offers/AU-Offers/Home_Page_Hero_Flight_Booking_-AU_Bank.jpg",
    },
    {
      title: "Assured cabs for your airport travel!",
      subtitle: "Get 1.5% Reward Points on every transaction",
      imageUrl:
        "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/CabBooking/Web_cab-Booking-page.jpg",
    },
    {
      title: "Fly with UPI",
      subtitle: "Use CODE UPI450 & get flat 450 off on domestic flights",
      imageUrl:
        "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Offers/Pax-wise-Offers/Home_Page_Hero_Flight_Booking_Domestic_UPI450.jpg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      itemsToShow={1}
      enableAutoPlay={false}
      selectedItem={activeIndex}
    >
      {slides.map((slide, index) => (
        <div>
          <div className=" px-[40px] py-[25px] font-oswald absolute  left-10 top-8 text-white text-[30px] uppercase font-medium">
            {slide.title}
          </div>

          <div className="px-[40px] py-[25px] font-oswald absolute  left-10 top-20 text-white text-[18px] uppercase  cursor-pointer">
            {slide.subtitle}
          </div>

          <Link href="/shop">
            <div className="px-[40px] py-[25px] font-serif  absolute bottom-[110px] left-12 text-black bg-slate-50  border-r-white rounded-md text-[20px] uppercase  cursor-pointer">
              Book now
            </div>
          </Link>
          <img src={slide.imageUrl} className="aspect-auto object-cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default SlidingBanner;
