import "../../src/app/globals.css";

import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import { useDispatch } from "react-redux";
import { flagMenuOff } from "../redux/reduxFeatures/menuSlide";

export default function SlidingMenu({ menu }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  let outcome;
  const hideFlagMenu = () => dispatch(flagMenuOff());

  if (menu) {
    outcome = (
      <div
        className="h-full opacity-75 bg-blue-950 fixed z-10 pt-14 w-full text-3xl "
        onClick={hideFlagMenu}
      >
        <div className="text-amber-50 leading-10 pt-0.5 flex flex-col text-center justify-around">
          <Link
            href={"/"}
            className={`z-20  ${
              router.pathname == "/" ? "text-yellow-400" : ""
            }`}
            onClick={hideFlagMenu}
          >
            Start
          </Link>
          <Link
            href={"/blog"}
            className={`  ${
              router.pathname == "/blog" ? "text-yellow-400" : ""
            }`}
            onClick={hideFlagMenu}
          >
            Blog
          </Link>
          <Link
            href={"/shopingarea"}
            className={`  ${
              router.pathname == "/shopingarea" ? "text-yellow-400" : ""
            }`}
            onClick={hideFlagMenu}
          >
            Shop
          </Link>
          <Link
            href={"/about"}
            className={`  ${
              router.pathname == "/about" ? "text-yellow-400" : ""
            }`}
            onClick={hideFlagMenu}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`  ${
              router.pathname == "/contact" ? "text-yellow-400" : ""
            }`}
            onClick={hideFlagMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    );
  } else {
    ("");
  }
  return <>{outcome}</>;
}
