"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useAppContext from "@/context";
import ProductInterface from "@/types/productTypes";
import { Button } from "./ui/button";
import { MdOutlineManageSearch } from "react-icons/md";
import Path from "./Path";

const Shop = () => {
  const { products, setProducts }: any = useAppContext();
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="flex flex-col mt-[4.5rem] md:mt-28 justify-center items-center w-full">
      <div className="flex justify-start items-center w-[98%] sm:border-t md:border-t-0 p-2 lg:w-[86%]">
        <Path />
      </div>
      <div className="min-h-[80dvh] w-[96%] lg:w-[86%]  mx-auto mb-5 flex flex-col lg:flex-row justify-center items-start gap-5">
        <div className="lg:hidden sm:px-0 px-2 flex justify-between w-full items-center">
          <div className="text-xl HeadText font-extrabold">
            <h1>Shop Products</h1>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="flex gap-1 text-zinc-800 bg-zinc-100 py-1 px-2 rounded-md  justify-center items-center"
            >
              <span className="font-semibold ">Filter</span>
              <MdOutlineManageSearch className="text-2xl" />
            </button>
          </div>
        </div>

        <div
          className={`w-full  lg:w-3/12 min-h-56 ${
            openFilter ? "grid" : "hidden"
          } grid-cols-2 lg:flex justify-center lg:flex-col  lg:justify-start items-center rounded-md border shadow-sm p-4 gap-2`}
        >
          <div className="flex flex-col w-full justify-start items-center">
            <h1 className="w-full text-lg font-semibold text-black text-left border-b border-zinc-300 pb-[0.05rem]">
              Sort by
            </h1>
            <div className="flex gap-2 font-semibold text-black py-2 flex-col justify-start w-full items-center">
              <div className="flex gap-2 justify-start w-full items-center">
                <input
                  type="radio"
                  name=""
                  id="all"
                  className=" accent-primary h-4 w-4"
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex gap-2 justify-start w-full items-center">
                <input
                  type="radio"
                  name=""
                  id="lowToHigh"
                  className=" accent-primary h-4 w-4"
                />
                <label htmlFor="lowToHigh">Low to high</label>
              </div>
              <div className="flex gap-2 justify-start w-full items-center">
                <input
                  type="radio"
                  name=""
                  id="highToLow"
                  className=" accent-primary h-4 w-4"
                />
                <label htmlFor="highToLow">High to low</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start items-center">
            <h1 className="w-full text-lg font-semibold text-black text-left border-b border-zinc-300 pb-[0.05rem]">
              Price
            </h1>
            <div className="flex lg:flex-row flex-col  gap-2 font-semibold text-black py-2 justify-center w-full items-center">
              <div className="w-full lg:flex-1">
                <input
                  type="number"
                  className="py-2 px-3  w-full bg-zinc-100 focus:outline-none rounded-md"
                  name="low"
                  id="low"
                  placeholder="Lowest"
                />
              </div>
              <div className="w-full lg:flex-1">
                <input
                  type="number"
                  className="py-2 px-3  w-full bg-zinc-100 focus:outline-none rounded-md"
                  name="low"
                  id="low"
                  placeholder="Highest"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start items-center">
            <h1 className="w-full text-lg font-semibold text-black text-left border-b border-zinc-300 pb-[0.05rem]">
              Type
            </h1>
            <div className="flex flex-col gap-2 font-semibold text-black py-2 justify-center w-full items-center">
              <div className="flex gap-2 justify-start w-full items-center">
                <input
                  type="radio"
                  name=""
                  id="allType"
                  className=" accent-primary h-4 w-4"
                />
                <label htmlFor="allType">All</label>
              </div>
              <div className="flex gap-2 justify-start w-full items-center">
                <input
                  type="radio"
                  name=""
                  id="exclusiveType"
                  className=" accent-primary h-4 w-4"
                />
                <label htmlFor="exclusiveType">Exclusive</label>
              </div>
              <div className="flex gap-2 justify-start w-full items-center">
                <input
                  type="radio"
                  name=""
                  id="discountedType"
                  className=" accent-primary h-4 w-4"
                />
                <label htmlFor="discountedType">Discounted</label>
              </div>
            </div>
          </div>
          {/* <div className="filter">2</div> */}
        </div>
        <div className="w-full lg:w-9/12 flex flex-col justify-center items-center  min-[450px]:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4 xl:grid-cols-3 content-start">
          {products?.map((product: ProductInterface) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
