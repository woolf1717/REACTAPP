import "../src/app/globals.css";

import React from "react";
import { useState } from "react";

import Link from "next/link";

import Search from "./search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const myAccountArrowDown = <FontAwesomeIcon icon={faChevronDown} />;
  const myAccountArrowUp = <FontAwesomeIcon icon={faChevronUp} />;

  const [myAccountActive, setMyAccountActive] = useState(false);

  function showMore() {
    setMyAccountActive(!myAccountActive);
  }
  console.log(myAccountActive);

  return (
    <nav className=" w-screen bg-blue-950 px-8 overflow-hidden">
      <div className="h-10 bg-blue-950">
        <div className=" h-10 text-amber-50 flex justify-end items-center">
          <div>
            <Search />
          </div>
          <div className="relative inline-block ml-4 mr-px z-10">
            <Link href={"/login"} className="">
              My Account{" "}
            </Link>{" "}
            <button onClick={showMore}>
              {myAccountActive ? myAccountArrowDown : myAccountArrowUp}
            </button>
          </div>{" "}
          <div className="absolute w-40 h-6 ">
            {myAccountActive ? (
              <p className="bg-blue-950 mt-9 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea
                iure at similique, vel, in ipsum quibusdam vero sed labore,
                molestiae praesentium?
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="h-8 bg-blue-950 border-t border-amber-50 z-10">
        <div className="text-amber-50 leading-7">
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
