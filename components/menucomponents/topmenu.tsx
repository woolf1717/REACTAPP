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
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import logo from "../../src/pictures/logo/logo2.png";

export default function TopMenu() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const myAccountArrowDown = <FontAwesomeIcon icon={faChevronDown} />;
  // const myAccountArrowUp = <FontAwesomeIcon icon={faChevronUp} />;
  const [search, setSearch] = useState<boolean>(false);
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

  function handleSearchInit() {
    setSearch(false);
  }
  function handleSearchAbort() {
    setSearch(true);
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
          <div
            className={` mr-px inline-block ${
              mySearchActive ? "z-50 text-yellow-400" : ""
            }`}
          >
            <button onClick={showMoreSearch} className={`active w-8 text-xl`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <Link
            href={"/login"}
            className={`active w-8 hover:text-yellow-400 ${
              router.pathname == "/login" ? "text-yellow-400" : ""
            }`}
          >
            <button className="w-8 text-xl">{user}</button>
          </Link>
          <div
            className={`mr-px inline-block ${
              menuState ? "z-50 text-yellow-400" : ""
            }`}
          >
            <button
              className="active w-8 text-xl"
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
        <Search search={mySearchActive} />
      </div>
    </>
  );
}
