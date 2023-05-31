import "../../src/app/globals.css";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Search from "../search";
import LoginForm from "../menucomponents/loginForm";

import logo from "../src/pictures/logo/logo2.png";

import { useRouter } from "next/router";

export default function SlidingMenu({ menu }: any) {
  const router = useRouter();

  let outcome;

  if (!menu) {
    outcome = (
      <div
        className="h-full opacity-75 bg-blue-950 fixed z-10 pt-14 w-full text-3xl"
        // onClick={}
      >
        <div className="text-amber-50 leading-10 pt-0.5 flex flex-col text-center justify-around">
          <Link
            href={"/"}
            className={`  ${router.pathname == "/" ? "text-yellow-400" : ""}`}
          >
            Start
          </Link>
          <Link
            href={"/blog"}
            className={`  ${
              router.pathname == "/blog" ? "text-yellow-400" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href={"/shopingarea"}
            className={`  ${
              router.pathname == "/shopingarea" ? "text-yellow-400" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            href={"/about"}
            className={`  ${
              router.pathname == "/about" ? "text-yellow-400" : ""
            }`}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`  ${
              router.pathname == "/contact" ? "text-yellow-400" : ""
            }`}
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
