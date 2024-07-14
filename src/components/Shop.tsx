"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useAppContext from "@/context";
import ProductInterface from "@/types/productTypes";
import { Button } from "./ui/button";
import { MdOutlineManageSearch } from "react-icons/md";
import Path from "./Path";
import Filter from "./Filter";

const Shop = () => {
  const { products, setProducts }: any = useAppContext();
  const [openFilter, setOpenFilter] = useState(false);
  const [makeFixed, setMakeFixed] = useState(false);
  const [shopProducts, setShopProducts] = useState<ProductInterface[]>([]);
  const [checkedFilter, setCheckedFilter] = useState<string>("");
  const [checkedOfferFilter, setCheckedOfferFilter] = useState<string>("");
  const [allProducts, setAllProducts] = useState<ProductInterface[]>([]);
  useEffect(() => {
    setShopProducts(products);
    setAllProducts(products);
  }, [products]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setMakeFixed(window.scrollY > 0);
      setOpenFilter(false);
    });
  });
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
              <span className="font-semibold ">Filters</span>
              <MdOutlineManageSearch className="text-2xl" />
            </button>
          </div>
        </div>

        <Filter
          openFilter={openFilter}
          makeFixed={makeFixed}
          setShopProducts={setShopProducts}
          products={products}
          checkedFilter={checkedFilter}
          setCheckedFilter={setCheckedFilter}
          setCheckedOfferFilter={setCheckedOfferFilter}
          checkedOfferFilter={checkedOfferFilter}
          setProducts={setProducts}
          allProducts={allProducts}
        />
        <div className="w-full  lg:w-9/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4 xl:grid-cols-3 content-start">
          {shopProducts?.map((product: ProductInterface) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
