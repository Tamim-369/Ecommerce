"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import useAppContext from "@/context";
import ProductInterface from "@/types/productTypes";
const HomeProducts = ({ productType }: { productType: string }) => {
  const { products }: any = useAppContext();
  return (
    <div className="w-10/12 my-20 mx-auto flex flex-col justify-center items-center">
      <div className="w-full border-b-2 mt-2 mb-8 border-primary">
        <h1 className="text-3xl  my-2 text-zinc-800 HeadText font-semibold">
          {productType[0].toUpperCase() + productType.slice(1) + [" "]}{" "}
          {productType.toLocaleLowerCase() == "discount" ||
          productType.toLocaleLowerCase() == "discounted" ||
          productType.toLocaleLowerCase() == "best deals"
            ? ""
            : "Products"}
        </h1>
      </div>

      <div className="w-full mx-auto  flex flex-col justify-center items-center sm:grid grid-cols-1 content-center text-center min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product: ProductInterface) => {
          return (
            <>
              {product.type.split(" ").join("").toLowerCase() ==
              productType.split(" ").join("").toLowerCase() ? (
                <>
                  <ProductCard product={product} />
                </>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      <button className="py-3 flex justify-center items-center gap-2 px-5 text-base font-bold mt-10 rounded-lg bg-primary text-white">
        <div>VIEW ALL PRODUCTS</div>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HomeProducts;
