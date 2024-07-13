"use client";

import React, { useEffect, useState } from "react";
import Router from "next/navigation";
import useAppContext from "@/context";
import ProductInterface from "@/types/productTypes";
import Image from "next/image";
import Path from "./Path";
import { getDiscountedPrice } from "@/utils/ProductUtils";
import { Button } from "./ui/button";
import { FaCartPlus, FaStar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import ProductCard from "./ProductCard";
import Link from "next/link";
const Product = ({
  productId,
  pathname,
}: {
  productId: string;
  pathname: string;
}) => {
  const { products }: any = useAppContext();
  const [product, setProduct] = useState<ProductInterface>({
    _id: 0,
    thumbnail: "",
    images: [],
    name: "",
    descripton: "",
    specification: "",
    about: "",
    price: 0,
    category: "",
    discount: 0,
    brand: "",
    type: "",
  });
  const [mainImage, setMainImage] = useState(0);
  const [showReviews, setShowReviews] = useState(false);
  useEffect(() => {
    const mainProduct = products.find(
      (product: ProductInterface) => product._id === Number(productId)
    );
    if (JSON.stringify(mainProduct) !== "{}") {
      setProduct(mainProduct);
    }
  }, [productId, products]);
  return (
    <div className="min-h-[80dvh] mt-20 sm:mt-24 md:mt-32 lg:mt-28 xl:mt-[7.6rem] flex flex-col justify-center items-center">
      <div className="text-gray-600 body-font w-full  overflow-hidden">
        <div className="py-2 mx-auto">
          <div className="lg:w-11/12 xl:w-10/12 w-11/12 md:w-full mx-auto flex md:flex-row flex-col">
            <div className="lg:w-auto w-full flex justify-center items-center lg:flex-row flex-col-reverse lg:mr-6 xl:mr-0">
              <div className="flex flex-row lg:flex-col xl:max-h-[25rem] justify-center min-[465px]:justify-center items-center w-[100%] overflow-x-auto overflow-y-hidden lg:overflow-y-auto lg:max-h-[100%] lg:overflow-x-hidden lg:w-32 my-2 lg:my-auto gap-2 mx-auto lg:mx-2 xl:mx-0 xl:w-28">
                {product.images.map((image, index) => (
                  <>
                    <Image
                      src={image}
                      onClick={() => setMainImage(index)}
                      alt="product"
                      className="lg:max-w-24 sm:flex hidden cursor-pointer  w-24 rounded-md border lg:w-full lg:min-w-full xl:max-w-[5.7rem] xl:w-[5.7rem] xl:min-w-[5.7rem] object-contain"
                      height={600}
                      objectFit="cover"
                      width={1000}
                    />
                    <div
                      onClick={() => setMainImage(index)}
                      className={`p-[0.3rem] sm:hidden flex my-1 mx-1 rounded-full border-2 hover:bg-primary hover:border-primary cursor-pointer ${
                        mainImage === index
                          ? "bg-primary border-primary"
                          : "bg-transparent border-zinc-300"
                      }`}
                    ></div>
                  </>
                ))}
              </div>
              <Image
                className=" object-cover rounded-md lg:h-full xl:max-h-[25rem] w-full max-w-sm xl:max-w-[25rem] mx-auto border object-center"
                src={product.images[mainImage]}
                alt="product"
                height={600}
                width={1000}
                objectFit="cover"
              />
            </div>

            <div className="lg:w-1/2 w-full flex flex-col justify-start  items-start md:pl-2 lg:pl-4 lg:py-2 xl:pb-10 mt-0 lg:mt-0 xl:pl-8">
              <div className="flex mb-3 justify-start items-center w-full sm:border-t md:border-t-0  ">
                <Path />
              </div>
              <h2 className="text-base mb-1 title-font text-gray-700 font-medium tracking-widest">
                {product.brand.toUpperCase()}
              </h2>
              <h1 className="text-gray-900 text-3xl font-bold HeadText mb-1">
                {product.name}
              </h1>
              <div className="flex mb-2">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <Link
                    onClick={() => setShowReviews(true)}
                    href={`/shop/product/${product?._id}#reviews`}
                    scroll={true}
                    className="text-gray-600 ml-3"
                  >
                    3 Reviews
                  </Link>
                </span>
              </div>
              <p className="leading-relaxed   whitespace-pre-wrap">
                {product.descripton}
              </p>
              {/* <div className="flex flex-col whitespace-pre-wrap mt-2 items-start pb-5 border-b-2 border-gray-100 mb-5">
                <span className="text-xl font-bold text-zinc-800">
                  About this product
                </span>
                <p>{product.about}</p>
              </div> */}
              <div className="flex justify-start w-full items-center gap-1 mt-2 border-t py-2">
                <span className="HeadText font-medium text-2xl text-gray-900">
                  ${getDiscountedPrice(product.price, product.discount)}
                </span>
                <span className="line-through">${product.price}</span>
                {/* <span></span> */}
              </div>
              <div className="flex justify-start mt-2 items-center w-full">
                <div className="flex justify-center items-center rounded-xl"></div>
                <button className="flex bg-primary text-white rounded-md text-lg font-semibold px-4 py-2 justify-center items-center gap-2">
                  <FaCartPlus className="font-bold text-2xl" />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-24 flex-col justify-center items-center xl:w-10/12 lg:w-11/12 w-full px-6 lg:px-0">
        <div className="flex gap-2 justify-start w-full border-b pb-2 items-center">
          <div
            onClick={() => setShowReviews(false)}
            className={`px-1 text-xl font-bold border-b-4 text-zinc-800 hover:border-b-primary transition-all cursor-pointer ${
              !showReviews ? "border-primary" : "border-zinc-300"
            }`}
          >
            Description
          </div>
          <div
            id="reviews"
            onClick={() => setShowReviews(true)}
            className={`px-1 text-xl font-bold border-b-4 text-zinc-800 hover:border-b-primary transition-all cursor-pointer ${
              showReviews ? "border-primary" : "border-zinc-300"
            }`}
          >
            Review
          </div>
        </div>

        {showReviews ? (
          <div className="flex flex-col gap-4 h-96 overflow-y-auto border-b px-2 py-4 justify-start items-start w-full ">
            <div className="flex max-w-[35rem] flex-col bg-white border shadow-sm rounded-md p-2 justify-start items-start">
              <div className="flex justify-center gap-1 items-center">
                <FaUserCircle className="bg-zinc-100 p-1 text-5xl rounded-full text-primary" />
                <div className="text-xl font-bold mt-1 text-zinc-900">
                  Omuk User
                </div>
              </div>
              <div className="flex mt-1 justify-start items-start px-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-zinc-300" />
              </div>
              <div className="px-2 py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                architecto beatae similique, quas impedit voluptatem corrupti ex
                a. Provident iure alias cum ullam?
              </div>
              <div className="flex text-sm font-semibold text-zinc-700 justify-center items-center p-2 py-1">
                1 day ago
              </div>
            </div>
            <div className="flex max-w-[35rem] flex-col bg-white border shadow-sm rounded-md p-2 justify-start items-start">
              <div className="flex justify-center gap-1 items-center">
                <FaUserCircle className="bg-zinc-100 p-1 text-5xl rounded-full text-primary" />
                <div className="text-xl font-bold mt-1 text-zinc-900">
                  Omuk User
                </div>
              </div>
              <div className="flex mt-1 justify-start items-start px-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-zinc-300" />
              </div>
              <div className="px-2 py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                architecto beatae similique, quas impedit voluptatem corrupti ex
                a. Provident iure alias cum ullam?
              </div>
              <div className="flex text-sm font-semibold text-zinc-700 justify-center items-center p-2 py-1">
                1 day ago
              </div>
            </div>
            <div className="flex max-w-[35rem] flex-col bg-white border shadow-sm rounded-md p-2 justify-start items-start">
              <div className="flex justify-center gap-1 items-center">
                <FaUserCircle className="bg-zinc-100 p-1 text-5xl rounded-full text-primary" />
                <div className="text-xl font-bold mt-1 text-zinc-900">
                  Omuk User
                </div>
              </div>
              <div className="flex mt-1 justify-start items-start px-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-zinc-300" />
              </div>
              <div className="px-2 py-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                architecto beatae similique, quas impedit voluptatem corrupti ex
                a. Provident iure alias cum ullam?
              </div>
              <div className="flex text-sm font-semibold text-zinc-700 justify-center items-center p-2 py-1">
                1 day ago
              </div>
            </div>
          </div>
        ) : (
          <div className="p-2 sm:p-5  flex flex-col justify-start items-start w-full">
            <h1 className="text-xl font-bold text-zinc-800">Description</h1>
            <p>{product.descripton}</p>
            <h1 className="text-xl mt-4 font-bold text-zinc-800">
              More About This Product
            </h1>
            <p>{product.about}</p>
          </div>
        )}
      </div>

      <div className="flex my-10 flex-col justify-start items-start xl:w-10/12 lg:w-11/12 w-full">
        <div className="flex flex-col text-left justify-start items-start text-2xl border-b p-2 mb-2 font-semibold HeadText w-full">
          Suggested Products
        </div>
        <div className="grid grid-cols-4 gap-2 xl:w-11/12 mt-2 lg:w-11/12 w-full justify-center items-center">
          {products.map((productItem: ProductInterface) => {
            if (productItem.category !== product.category) return null;
            return <ProductCard key={productItem._id} product={productItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
