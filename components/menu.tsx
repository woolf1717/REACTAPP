import "../src/app/globals.css";

import React from "react";

import Link from "next/link";

import Search from "./search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <nav className=" w-screen bg-blue-950 px-8 overflow-hidden">
      <div className="h-10 bg-blue-950">
        <div className=" h-10 text-amber-50 flex justify-end items-center">
          <div>
            <Search />
          </div>

          <div className="inline-block ">
            <Link href={"/login"} className="ml-4 mr-px">
              My Account <FontAwesomeIcon icon={faChevronDown} />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-8 bg-blue-950 border-t border-amber-50">
        <div className="text-amber-50">
          <Link href={"/"} className="ml-px mr-4">
            Start
          </Link>
          <Link href={"/blog"} className="mx-4">
            Blog
          </Link>
          <Link href={"/shop"} className="mx-4">
            Shop
          </Link>
          <Link href={"/about"} className="mx-4">
            About
          </Link>
          <Link href={"/contact"} className="mx-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
