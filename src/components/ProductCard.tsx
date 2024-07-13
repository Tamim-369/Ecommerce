import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductInterface from "@/types/productTypes";
import Link from "next/link";
import { getDiscountedPrice } from "@/utils/ProductUtils";
import { useShoppingContext } from "@/context/shop";
import { FaMinus, FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

interface Props {
  product: ProductInterface;
  minWidth?: boolean;
}
export default function ProductCard({ product, minWidth }: Props) {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity }: any =
    useShoppingContext();
  return (
    <div
      className={`relative ${
        minWidth ? "min-w-64 sm:min-w-72" : "w-full"
      }  flex w-full max-w-xs flex-col  rounded-xl border border-zinc-200 bg-white shadow-md`}
    >
      <Link
        className="relative  flex h-40 min-[350px]:h-48 min-[450px]:h-60 overflow-hidden rounded-t-xl"
        href={`/shop/product/${product?._id}`}
      >
        <img
          className="object-cover object-center w-full h-full"
          src={product?.thumbnail}
          alt="product image"
        />
        {product.discount > 0 && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-white">
            {product?.discount}% OFF
          </span>
        )}
      </Link>
      <div className="mt-4 px-2 pb-2 min-[450px]:px-5 min-[450px]:pb-5">
        <small className="text-[0.6rem] min-[350px]:text-xs font-bold uppercase w-full text-left tracking-tight text-zinc-600">
          {product?.brand}
        </small>
        <Link href={`/shop/product/${product?._id}`}>
          <h5 className="text-[1rem] font-semibold min-[350px]:text-lg min-[350px]:font-semibold min-[450px]:font-medium min-[450px]:text-xl w-full text-left tracking-tight text-zinc-900">
            {product?.name}
          </h5>
        </Link>
        <div className="min-[450px]:mt-2 mb-2 min-[450px]:mb-5 flex items-center justify-between">
          <p>
            <span className="text-lg min-[350px]:text-xl min-[450px]:text-2xl font-bold text-zinc-900">
              ${getDiscountedPrice(product.price, product.discount)}
            </span>
            {product.discount > 0 && (
              <span className="text-xs min-[450px]:text-sm text-zinc-900 line-through">
                ${product.price}
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-between">
          <button
            onClick={() => {
              if (getItemQuantity(product._id) > 0) return null;
              increaseCartQuantity(product._id);
              toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } max-w-lg w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 top-[2.6rem] relative max-h-32 `}
                >
                  <div className="w-4/12">
                    <Image
                      objectFit="cover"
                      className="h-[100%] rounded-l-lg w-[100%] object-cover"
                      width={100}
                      height={100}
                      src={product.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className=" w-10/12 p-2">
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-base font-semibold">
                          {`Added ${product.name} to cart`}
                        </span>
                        <span className="text-sm font-medium">
                          Click view cart to view all the items in the cart or
                          continue shopping
                        </span>
                      </div>
                      <button className="bg-primary py-1 px-2 rounded-md text-white">
                        View cart
                      </button>
                    </div>
                  </div>
                  <div
                    onClick={() => toast.dismiss(t.id)}
                    className="absolute top-0 cursor-pointer right-0 p-2 text-zinc-400"
                  >
                    <RxCross2 className="text-xl" />
                  </div>
                </div>
              ));
            }}
            className={`flex  items-center justify-center rounded-md bg-primary w-full px-2 py-2 min-[450px]:px-5  min-[450px]:py-2.5 text-center text-sm min-[450px]:text-base font-medium text-white focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 min-[450px]:h-6 min-[450px]:w-6 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
