import "../../src/app/globals.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { flagMenuOn, flagMenuOff } from "../redux/reduxFeatures/menuSlide";

import Search from "../search";
import SlidingMenu from "./slidingmenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import logo from "../../src/pictures/logo/logo2.png";

export default function TopMenu() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const myAccountArrowDown = <FontAwesomeIcon icon={faChevronDown} />;
  // const myAccountArrowUp = <FontAwesomeIcon icon={faChevronUp} />;

  const [mySearchActive, setMySearchActive] = useState<boolean>(false);

  const user = (
    <FontAwesomeIcon icon={icon({ name: "user", style: "solid" })} />
  );
  const menu = (
    <FontAwesomeIcon icon={icon({ name: "bars", style: "solid" })} />
  );

  function showMoreSearch() {
    setMySearchActive(!mySearchActive);
  }

  const menuState = useSelector((state: any) => state.menu.value);

  return (
    <>
      <div className="flex h-14 justify-between bg-blue-950 text-amber-50 ">
        {" "}
        <Link href={"/"}>
          {" "}
          <div className="w-40 pl-2 pt-4 ">
            <Image src={logo} quality={100} alt="logo" height={50} />
          </div>
        </Link>
        {/* <div className=" h-12 text-amber-50 flex justify-end items-center"> */}
        <div className="flex-end flex pt-4">
          <button
            onClick={showMoreSearch}
            className="z-10 w-8 pb-2 text-xl hover:text-yellow-400"
          >
            <Search />
          </button>
          <Link
            href={"/login"}
            className={`active w-8 hover:text-yellow-400 ${
              router.pathname == "/login" ? "text-yellow-400" : ""
            }`}
          >
            <button className="w-8 text-xl">{user}</button>
          </Link>
          <div className="z-50 mr-px inline-block ">
            <button
              className={`active w-8 text-xl ${
                menuState ? "text-yellow-400" : ""
              }`}
              onClick={
                menuState
                  ? () => dispatch(flagMenuOff())
                  : () => dispatch(flagMenuOn())
              }
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
        <SlidingMenu menu={menuState} />
      </div>
    </>
  );
}
