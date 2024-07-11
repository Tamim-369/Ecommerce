import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomeProducts from "@/components/HomeProducts";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HomeProducts productType="Exclusive" />
      <HomeProducts productType="Best Selling" />
      <HomeProducts productType="Best Deals" />
    </>
  );
}
