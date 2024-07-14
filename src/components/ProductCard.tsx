import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductInterface from "@/types/productTypes";
import Link from "next/link";
import { getDiscountedPrice } from "@/utils/ProductUtils";
import { useShoppingContext } from "@/context/shop";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircle, IoIosWarning } from "react-icons/io";
import {
  TbShoppingCart,
  TbShoppingCartCancel,
  TbShoppingCartPlus,
} from "react-icons/tb";

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
        <small className="text-[0.6rem] flex justify-start items-start min-[350px]:text-xs font-bold uppercase w-full text-left tracking-tight text-zinc-600">
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
          {getItemQuantity(product._id) > 0 ? (
            <button
              // onClick={() => {
              //   decreaseCartQuantity(product._id);
              //   toast((t) => (
              //     <div className="flex justify-between items-center my-1">
              //       <div className="flex flex-col justify-center items-center mr-4">
              //         <IoIosWarning className="text-2xl text-yellow-600" />
              //       </div>
              //       <div className="">{product.name} removed to the cart.</div>
              //       <div className="flex flex-col justify-start items-start h-full">
              //         <button onClick={() => toast.dismiss(t.id)} className="">
              //           <RxCross2 className="text-xl text-zinc-400" />
              //         </button>
              //       </div>
              //     </div>
              //   ));
              // }}
              className={`flex  items-center justify-center rounded-md bg-zinc-800 w-full px-2 py-2 min-[450px]:px-5  min-[450px]:py-2.5 text-center text-sm min-[450px]:text-base font-medium text-white  shadow-sm border focus:outline-none`}
            >
              <TbShoppingCart className="mr-2 text-2xl text-white" />
              View Cart
            </button>
          ) : (
            <button
              onClick={() => {
                increaseCartQuantity(product._id);
                toast((t) => (
                  <div className="flex justify-between items-center my-1">
                    <div className="flex flex-col justify-center items-center mr-4">
                      <FaCheckCircle className="text-2xl text-emerald-600" />
                    </div>
                    <div className="">{product.name} added to the cart.</div>
                    <div className="flex flex-col justify-start items-start h-full">
                      <button onClick={() => toast.dismiss(t.id)} className="">
                        <RxCross2 className="text-xl text-zinc-400" />
                      </button>
                    </div>
                  </div>
                ));
              }}
              className={`flex  items-center justify-center rounded-md bg-primary w-full px-2 py-2 min-[450px]:px-5  min-[450px]:py-2.5 text-center text-sm min-[450px]:text-base font-medium text-white focus:outline-none`}
            >
              <TbShoppingCartPlus className="mr-2 text-2xl" />
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
