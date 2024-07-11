"use client";
import { FaGift, FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaRegUserCircle, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import Router, { usePathname } from "next/navigation";
import {
  LiaAngleDownSolid,
  LiaAngleUpSolid,
  LiaUserSolid,
} from "react-icons/lia";
import { HiOutlineMenu } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
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
  const [hideCate, setHideCate] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      const handleResize = () => {
        if (window.innerWidth >= 1024 && pathname === "/") {
          setHideCate(true);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <nav className="sm:border-none border fixed z-50 top-0 w-[100%] flex justify-center items-center flex-col">
      <div className="flex w-full bg-white min-[400px]:px-5 xl:px-24 lg:px-16 px-1 p-3 justify-between items-center">
        {/* logo */}
        <Link
          onClick={() => {
            setOpenCategories(false);
            setOpenMenu(false);
          }}
          href={"/"}
          className="logo"
        >
          <Image
            alt="logo"
            src={"/logo.png"}
            className="md:object-scale-down  scale-90 filter  min-[400px]:scale-100 min-[400px]:object-contain object-center"
            width={140}
            height={140}
          />
        </Link>
        {/* search */}
        <div className="searchBox w-6/12 mx-3  hidden md:flex justify-center items-center gap-2">
          <input
            type="text"
            className="py-[6px] px-[8px] bg-zinc-100 focus:outline-none w-10/12 rounded-md"
            placeholder="Search products"
          />
          <Button className="text-lg text-white lg:w-2/12">Search</Button>
        </div>
        {/* important buttons */}
        <div className="flex justify-center items-center gap-3">
          <Button
            variant={"link"}
            onClick={() => setOpenSearch(!openSearch)}
            className="text-lg text-primary min-[400px]:hover:text-white transition-all p-0 min-[400px]:p-2 md:p-3 md:text-white min-[400px]:hover:bg-primary md:bg-primary bg-transparent min-[400px]:bg-zinc-100 justify-center items-center  gap-2 md:hidden flex "
          >
            <FaMagnifyingGlass className="text-lg" />
          </Button>
          <button className="text-lg text-primary min-[400px]:hover:text-white transition-all  min-[400px]:p-2 md:p-3 md:text-white flex md:bg-primary bg-transparent rounded-md md:py-[6px] min-[400px]:bg-zinc-100 justify-center items-center  gap-2 ">
            <FaGift className="md:text-lg text-xl" />
            <span className="text-base font-medium mt-[1px] md:block hidden">
              Offers
            </span>
          </button>
          <button className="text-lg bg-transparent  text-primary flex justify-center items-center  gap-2 ">
            <FaRegUser className=" text-xl min-[400px]:text-4xl text-primary p-0 bg-transparent min-[400px]:bg-zinc-100 min-[400px]:p-2 rounded-md min-[400px]:hover:bg-primary min-[400px]:hover:text-white transition-all  " />
          </button>
          <button className="text-lg bg-transparent text-primary flex justify-center items-center  gap-2 ">
            <FaShoppingBag className="text-xl min-[400px]:text-4xl text-primary p-0 bg-transparent min-[400px]:bg-zinc-100 min-[400px]:p-2 rounded-md min-[400px]:hover:bg-primary min-[400px]:hover:text-white transition-all  " />
          </button>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={`flex md:hidden justify-center items-center mr-2 text-3xl  ${
              openMenu
                ? "bg-primary border-primary text-white"
                : "bg-zinc-100  text-primary"
            } transition-all border min-[400px]:ml-auto  p-1 rounded-md`}
          >
            <HiOutlineMenu className="text-[1.7rem]" />
          </button>
        </div>
      </div>
      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } md:flex md:flex-row flex-col justify-between items-center bg-white text-primary w-full border-t border-zinc-200 border-b border-b-zinc-100 shadow-sm min-[400px]:px-5 lg:px-[5rem] xl:px-24 px-1 transition-all md:py-0 py-3 `}
      >
        <div className="flex md:flex-row md:px-0 px-2  flex-col jucstify-center items-center bg-white text-primary w-full  ">
          <div className="categories-section">
            <button
              onClick={() => {
                setOpenCategories(!openCategories);
              }}
              className=" categories-button "
              // disabled={hideCate ? true : false}
            >
              <div className="flex gap-2 justify-center items-center">
                <LuMenu className="text-white text-2xl" />
                <span className="text-sm mt-1 HeadText text-nowrap">
                  BROWSE CATEGORIES
                </span>
              </div>
              {pathname == "/" && (
                <div
                  className={` ${
                    pathname === "/" ? "hidden lg:hidden xl:flex" : "hidden"
                  } justify-center items-center`}
                >
                  <LiaAngleUpSolid />
                </div>
              )}

              <div
                className={` ${
                  pathname === "/" ? "xl:hidden" : ""
                } flex justify-center items-center lg:hidden xl:flex`}
              >
                {openCategories ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
              </div>
            </button>
            {openCategories && (
              <div
                className={`${
                  pathname === "/" ? "lg:hidden " : "all-categories"
                } all-categories`}
              >
                {categories.map((category) => (
                  <Link
                    onClick={() => {
                      setOpenCategories(false);
                      setOpenMenu(false);
                    }}
                    className="categories-link"
                    href={category.split(" ").join("-").toLowerCase()}
                    key={category}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            onClick={() => {
              setOpenCategories(false);
              setOpenMenu(false);
            }}
            className="navbar-link "
            href={"/shop"}
          >
            Shop
          </Link>
          <Link
            onClick={() => {
              setOpenCategories(false);
              setOpenMenu(false);
            }}
            className="navbar-link "
            href={"/"}
          >
            About Us
          </Link>
          <Link
            onClick={() => {
              setOpenCategories(false);
              setOpenMenu(false);
            }}
            className="navbar-link "
            href={"/"}
          >
            Contact Us
          </Link>
        </div>
        <div className="flex gap-2 justify-center md:my-0 my-2 items-center text-primary">
          <MdPhone className="text-lg" />
          <span className="text-base font-bold min-w-32">01234-567891</span>
        </div>
      </div>
      <div
        className={`${
          openSearch ? "flex" : "hidden"
        }  gap-2 bg-white border-b pt-1 pb-3 justify-center items-center w-full md:hidden`}
      >
        <input
          type="text"
          className="py-[6px] px-[8px] bg-zinc-100 focus:outline-none w-10/12 rounded-md"
          placeholder="Search products"
        />
        <Button className="text-lg text-white lg:w-2/12">Search</Button>
      </div>
    </nav>
  );
};

export default Navbar;
