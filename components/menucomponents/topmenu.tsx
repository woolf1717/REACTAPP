import "../../src/app/globals.css";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Search from "../search";
import LoginForm from "./loginForm";
import SlidingMenu from "./slidingmenu";

import logo from "../../src/pictures/logo/logo2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function TopMenu() {
  const router = useRouter();
  const myAccountArrowDown = <FontAwesomeIcon icon={faChevronDown} />;
  const myAccountArrowUp = <FontAwesomeIcon icon={faChevronUp} />;

  const [myAccountActive, setMyAccountActive] = useState<boolean>(false);
  const [mySearchActive, setMySearchActive] = useState<boolean>(false);
  const [menuSlideActive, setMenuSlideActive] = useState<boolean>(true);

  function handleMenuSlideInit() {
    setMenuSlideActive(!menuSlideActive);
  }
  function handleMenuSlideAbort() {
    setMenuSlideActive(true);
  }

  const user = (
    <FontAwesomeIcon icon={icon({ name: "user", style: "solid" })} />
  );
  const menu = (
    <FontAwesomeIcon icon={icon({ name: "bars", style: "solid" })} />
  );

  function showMoreMyAccount() {
    setMyAccountActive(!myAccountActive);
  }
  function showMoreSearch() {
    setMySearchActive(!mySearchActive);
  }

  return (
    <>
      <div className="h-14 bg-blue-950 flex justify-between text-amber-50 ">
        {" "}
        <Link href={"/"}>
          {" "}
          <div className="w-40 pt-4 pl-2 ">
            <Image src={logo} quality={100} alt="logo" height={50} />
          </div>
        </Link>
        {/* <div className=" h-12 text-amber-50 flex justify-end items-center"> */}
        <div className="flex flex-end pt-4">
          <button
            onClick={showMoreSearch}
            className="hover:text-yellow-400 z-10 pb-2 text-xl"
          >
            <Search />
          </button>
          <div className="inline-block ml-2 mr-px z-50 ">
            <Link
              href={"/login"}
              className={`hover:text-yellow-400 active w-10 ${
                router.pathname == "/login" ? "decoration-1" : ""
              }`}
            >
              <button className="w-10 text-xl">{user}</button>
            </Link>

            <button
              className="active w-10 text-xl"
              onClick={handleMenuSlideInit}
            >
              {menu}
            </button>

            {/* <button
              onClick={showMoreMyAccount}
              className="hover:text-yellow-400 pr-2"
            >
              {myAccountActive ? myAccountArrowDown : myAccountArrowUp}
            </button> */}
            {/* <div className="w-20 h-4 absolute">
              {myAccountActive ? <LoginForm /> : ""}
            </div> */}
          </div>{" "}
        </div>
        {/* </div> */} <SlidingMenu menu={menuSlideActive} />
      </div>
    </>
  );
}
