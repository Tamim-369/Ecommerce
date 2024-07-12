"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const UndefinedProduct = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/shop");
  }, []);
  return <></>;
};

export default UndefinedProduct;
