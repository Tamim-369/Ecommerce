import React from "react";
import { FaDropbox, FaRegThumbsUp, FaTruckFast } from "react-icons/fa6";
import {
  MdOndemandVideo,
  MdOutlineContactSupport,
  MdPreview,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Features = () => {
  return (
    <div className="grid mt-2  gap-2 sm:grid-cols-2 grid-cols-1 content-center  lg:grid-cols-4 mx-auto w-[80dvw] bg-transparent ">
      <div className="flex justify-self-center sm:max-w-72 justify-center gap-2 items-center p-2 rounded-md ">
        <FaTruckFast className="text-primary text-7xl" />
        <div>
          <h1 className="text-xl font-bold HeadText">Fast Delivery</h1>
          <p className="font-sans text-sm">We deliver within 3 to 5 days</p>
        </div>
      </div>
      <div className="flex justify-self-center sm:max-w-72 justify-center gap-2 items-center p-2 rounded-md ">
        <MdOndemandVideo className="text-primary text-7xl" />
        <div>
          <h1 className="text-xl font-bold HeadText">Product videos</h1>
          <p className="font-sans text-sm">
            We have videos of every product that we sell
          </p>
        </div>
      </div>
      <div className="flex justify-self-center sm:max-w-72 justify-center gap-2 items-center p-2 rounded-md ">
        <MdOutlineContactSupport className="text-primary text-6xl" />
        <div>
          <h1 className="text-xl font-bold HeadText">Customer Support</h1>
          <p className="font-sans text-sm">We have 24/7 customer support</p>
        </div>
      </div>
      <div className="flex justify-self-center sm:max-w-72 justify-center gap-2 items-center p-2 rounded-md ">
        <FaRegThumbsUp className="text-primary text-7xl" />
        <div>
          <h1 className="text-xl font-bold HeadText">Original Product</h1>
          <p className="font-sans text-sm">
            We always try provide the original product
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
