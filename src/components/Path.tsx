"use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

const Path = () => {
  const [paths, setPaths] = useState<string[]>([]);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const url = window?.location?.pathname;

    if (url) {
      setOrigin(window.location.origin);
      setPaths(url.split("/").filter((p) => p !== ""));
    }
  }, []);

  return (
    <div className="flex mt-2 justify-center items-center gap-1">
      <Link
        href={`${origin}/`}
        className="flex justify-center items-center gap-1"
      >
        <IoHome />/{/* <FaAngleRight className="text-sm" /> */}
      </Link>
      {paths.map((path, index) => (
        <div className="flex justify-center items-center gap-1" key={index}>
          {index > 0 && (
            <span>{/* <FaAngleRight className="text-sm" /> */}/</span>
          )}

          <Link
            href={`${window.location.origin}/${paths
              .slice(0, index + 1)
              .join("/")}`}
            className={`${index === paths.length - 1 ? "text-primary" : ""}`}
          >
            {path}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Path;
