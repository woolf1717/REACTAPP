import "../../src/app/globals.css";

import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

export default function BottomMenu() {
  const router = useRouter();
  return (
    <>
      <div className="h-12 bg-blue-950 border-t border-amber-50 z-10">
        <div className="text-amber-50 leading-10 pt-0.5">
          <Link
            href={"/"}
            className={`ml-px mr-4 hover:text-yellow-400 active:text-yellow-400 pl-2   ${
              router.pathname == "/" ? "text-yellow-400" : ""
            }`}
          >
            Start
          </Link>
          <Link
            href={"/blog"}
            className={`mx-4 hover:text-yellow-400 active:text-yellow-400 ${
              router.pathname == "/blog" ? "text-yellow-400" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href={"/shopingarea"}
            className={`mx-4 hover:text-yellow-400 active:text-yellow-400 ${
              router.pathname == "/shopingarea" ? "text-yellow-400" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            href={"/about"}
            className={`mx-4 hover:text-yellow-400 active:text-yellow-400 ${
              router.pathname == "/about" ? "text-yellow-400" : ""
            }`}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`mx-4 hover:text-yellow-400 active:text-yellow-400 ${
              router.pathname == "/contact" ? "text-yellow-400" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
