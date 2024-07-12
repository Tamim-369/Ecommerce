import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductInterface from "@/types/productTypes";
import Link from "next/link";
interface Props {
  product: ProductInterface;
  minWidth?: boolean;
}
export default function ProductCard({ product, minWidth }: Props) {
  return (
    <div
      className={`relative ${
        minWidth ? "min-w-64 sm:min-w-72" : "w-full"
      }  flex w-full max-w-xs flex-col  rounded-xl border border-zinc-200 bg-white shadow-md`}
    >
      <Link
        className="relative  flex h-60 overflow-hidden rounded-t-xl"
        href={`/shop/product/${product?._id}`}
      >
        <img
          className="object-cover object-center w-full h-full"
          src={product?.thumbnail}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-white">
          {product?.discount}% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href={`/shop/product/${product?._id}`}>
          <h5 className="text-xl tracking-tight text-zinc-900">
            {product?.name}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-zinc-900">৳449</span>
            <span className="text-sm text-zinc-900 line-through">৳699</span>
          </p>
        </div>
        <Link
          href={`/shop/product/${product?._id}`}
          className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-base font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
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
        </Link>
      </div>
    </div>
  );
}
