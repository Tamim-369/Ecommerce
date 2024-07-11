"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Button } from "./ui/button";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const slides = [
    {
      id: 1,
      src: "/slides/slide-1.png",
    },
    {
      id: 2,
      src: "/slides/slide-2.png",
    },
    {
      id: 3,
      src: "/slides/slide-3.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const changeImage = (direction: any) => {
    if (direction === "next") {
      setImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }
  };
  const categories = [
    "Lights",
    "Speaker",
    "Fan",
    "Headphone",
    "Airpods",
    "Smart Watch",
    "Earphone",
    "Microphone",
    "Power Bank",
  ];
  return (
    <div className="w-full sm:w-[95%] md:w-11/12 lg:w-10/12   relative flex-wrap mx-auto min-h-40  mt-[4rem] md:mt-[7.4rem]  flex">
      <div className="w-3/12 pr-5 lg:flex flex-col justify-start  items-center hidden ">
        <div className={`all-categories-home`}>
          {categories.map((category) => (
            <Link
              className="categories-link"
              href={category.split(" ").join("-").toLowerCase()}
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:w-9/12 px-0 h-[100%]">
        <div className="relative p-[0.02rem] sm:p-2 h-[100%]">
          <Image
            alt="HitekBD"
            src={slides[imageIndex].src}
            className="w-full h-full  rounded-sm sm:rounded-lg border min-[400px]:object-contain object-top"
            objectFit="cover"
            width={1920}
            height={1080}
          />
          <div className="flex px-5 bottom-0 w-full justify-center gap-2 mb-4 items-center absolute">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${
                  index === imageIndex
                    ? "bg-primary border-primary"
                    : "bg-white border-zinc-300"
                } rounded-sm py-[0.15rem] px-[0.8rem] border`}
                onClick={() => setImageIndex(index)}
              ></div>
            ))}
          </div>
          <div className="hidden sm:flex sm:px-7 top-0 bottom-0 w-full justify-between items-center absolute">
            <button
              onClick={() => changeImage("prev")}
              className="text-3xl p-[0.1rem] sm:p-1 border shadow-md border-primary/85 hover:bg-primary/95 bg-primary text-white rounded-full"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={() => changeImage("next")}
              className="text-3xl p-[0.1rem] sm:p-1 border shadow-md border-primary/85 hover:bg-primary/95 bg-primary text-white rounded-full"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
