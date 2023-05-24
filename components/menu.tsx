import "../src/app/globals.css";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

import Search from "./search";
import LoginForm from "./loginForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const myAccountArrowDown = <FontAwesomeIcon icon={faChevronDown} />;
  const myAccountArrowUp = <FontAwesomeIcon icon={faChevronUp} />;

  const [myAccountActive, setMyAccountActive] = useState(false);
  const [mySearchActive, setMySearchActive] = useState(false);

  const router = useRouter();

  function showMoreMyAccount() {
    setMyAccountActive(!myAccountActive);
  }
  function showMoreSearch() {
    setMySearchActive(!mySearchActive);
  }

  return (
    <nav className=" w-screen bg-blue-950 px-8 overflow-hidden">
      <div className="h-10 bg-blue-950">
        <div className=" h-10 text-amber-50 flex justify-end items-center">
          <button
            onClick={showMoreSearch}
            className="hover:text-yellow-400 z-10"
          >
            <Search />
          </button>
          <div className="relative inline-block ml-4 mr-px z-10">
            <Link
              href={"/login"}
              className={`hover:text-yellow-400 active ${
                router.pathname == "/login" ? "decoration-1" : ""
              }`}
            >
              MyAccount{" "}
            </Link>
            <button
              onClick={showMoreMyAccount}
              className="hover:text-yellow-400"
            >
              {myAccountActive ? myAccountArrowDown : myAccountArrowUp}
            </button>
          </div>
          <div className="absolute w-40 h-6 ">
            {myAccountActive ? <LoginForm /> : ""}
          </div>
        </div>
      </div>
      <div className="h-8 bg-blue-950 border-t border-amber-50 z-10">
        <div className="text-amber-50 leading-7">
          <Link
            href={"/"}
            className={`ml-px mr-4 hover:text-yellow-400 active:text-yellow-400 ${
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
    </nav>
  );
}
