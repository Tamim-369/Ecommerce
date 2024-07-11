"use client";

import React, { useEffect, useState } from "react";
import Router from "next/navigation";
import useAppContext from "@/context";
import ProductInterface from "@/types/productTypes";
const Product = ({ productId }: { productId: string }) => {
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

  useEffect(() => {
    const mainProduct = products.find(
      (product: ProductInterface) => product._id === Number(productId)
    );
    if (JSON.stringify(mainProduct) !== "{}") {
      setProduct(mainProduct);
    }
  }, [productId, products]);
  return (
    <div className="min-h-[80dvh] flex flex-col justify-center items-center">
      {product?.name}
    </div>
  );
};

export default Product;
