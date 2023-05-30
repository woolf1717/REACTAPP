import "../../src/app/globals.css";

import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faHouse,
  faShirt,
  faLaptop,
  faClock,
  faShoePrints,
  faMapLocationDot,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopNav() {
  const router = useRouter();

  return (
    <>
      <div className="bg-neutral-50 overflow-hidden flex flex-col items-center  pt-px font-semibold rounded-md">
        <div className="flex flex-col h-2/4 w-full">
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400  h-1/4 w-full pt-px  ${
              router.pathname == "/shopingarea" ? "bg-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faList} /> Categories
            </div>
          </Link>{" "}
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400  h-1/4 w-full  border-t  ${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <FontAwesomeIcon icon={faHouse} /> Home
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400 h-1/4 w-full border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faShirt} /> Clothing
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400 h-1/4 w-full border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faLaptop} /> Electronics
            </div>
          </Link>
        </div>
        <div className="flex flex-col h-2/4 w-full">
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400 h-1/4 w-full border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faClock} /> Watches
            </div>
          </Link>{" "}
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400 h-1/4 w-full border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faShoePrints} /> Shoes
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400  h-1/4 w-full border-t ${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faMapLocationDot} /> Local Stores
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`pl-2 relative hover:text-yellow-400 active:text-yellow-400 h-1/4 w-full border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faAddressBook} /> Contact
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
