"use client";
import useAppContext from "@/context";
import { useShoppingContext } from "@/context/shop";
import ProductInterface from "@/types/productTypes";
import { getDiscountedPrice, getProductUsingID } from "@/utils/ProductUtils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartPage = () => {
  type CartItem = {
    id: string;
    quantity: number;
  };
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  }: any = useShoppingContext();
  const deliveryCharge = 120;

  const { products }: any = useAppContext();
  const totalAmount = cartItems.reduce((total: number, item: CartItem) => {
    const product = getProductUsingID(item.id, products);
    return (
      total +
      getDiscountedPrice(Number(product?.price), Number(product?.discount)) *
        item.quantity +
      deliveryCharge
    );
  }, 0);
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixed(window.scrollY > 0);
    });
  });
  return (
    <>
      <div className="font-sans mt-16 md:mt-28 relative  w-10/12 mx-auto bg-white py-4">
        <div className="grid relative md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white shadow-sm border p-4 rounded-md">
            <h2 className="text-2xl font-bold text-zinc-800">Cart</h2>
            <hr className="border-zinc-300 mt-4 mb-8" />
            <div className="space-y-4 max-h-[50dvh] overflow-y-auto">
              {cartItems.map((item: CartItem) => {
                const product = getProductUsingID(item.id, products);
                return (
                  <div className="grid grid-cols-3 items-center gap-4">
                    <div className="col-span-2 flex items-center gap-4">
                      <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                        <img
                          src={product?.thumbnail}
                          // src={product?.images[0]}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-800">
                          {product?.name}
                        </h3>
                        <h6
                          onClick={() => removeFromCart(product?._id)}
                          className="text-xs text-red-500 cursor-pointer mt-0.5"
                        >
                          Remove
                        </h6>
                        <div className="flex gap-4 mt-4">
                          <div className="flex justify-center items-center ">
                            <div
                              onClick={() => decreaseCartQuantity(product?._id)}
                              className="border p-1 cursor-pointer flex justify-center items-center w-4/12 rounded-l-full text-xl text-zinc-800"
                            >
                              <FaMinus />
                            </div>
                            <div className="py-1 px-4 w-4/12 border-t border-b text-center flex justify-center items-center text-sm font-bold text-zinc-800">
                              {getItemQuantity(product?._id)}
                            </div>

                            <div
                              onClick={() => increaseCartQuantity(product?._id)}
                              className="border p-1 cursor-pointer flex justify-center items-center w-4/12 rounded-r-full text-xl text-zinc-800"
                            >
                              <FaPlus />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <h4 className="text-base font-bold text-zinc-800">
                        $
                        {getDiscountedPrice(
                          Number(product?.price),
                          Number(product?.discount)
                        ) * getItemQuantity(product?._id)}
                      </h4>
                    </div>
                  </div>
                );
              })}
              {cartItems.length === 0 && (
                <div className="flex justify-center items-center">
                  <h3 className="text-xl font-bold text-zinc-800">
                    Your cart is empty
                  </h3>
                </div>
              )}
            </div>
          </div>
          <div
            className={`bg-white shadow-sm  border rounded-md p-4 max-h-56 `}
          >
            <ul className="text-zinc-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-base">
                Shipping{" "}
                <span className="ml-auto font-bold">${deliveryCharge}</span>
              </li>

              <li className="flex flex-wrap gap-4 text-base font-bold">
                Total <span className="ml-auto">${totalAmount}</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col justify-center items-center">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-primary hover:bg-primary text-white rounded-md"
              >
                Checkout
              </button>
              <Link
                href={"/shop"}
                className="text-sm px-4 py-2.5 w-full font-semibold flex justify-center items-center mt-2 bg-transparent text-zinc-800 border border-zinc-300 rounded-md"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
