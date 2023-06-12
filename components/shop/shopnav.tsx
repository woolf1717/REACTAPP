import "../../src/app/globals.css";

import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faClock,
  faHouse,
  faLaptop,
  faBook,
  faMapLocationDot,
  faShirt,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopNav() {
  const router = useRouter();

  return (
    <>
      <div className="row-start-3 row-end-5 flex flex-col items-center overflow-hidden  rounded-md bg-neutral-50 py-px text-xs font-semibold">
        <div className="flex h-2/4 w-full flex-col">
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2  pt-px hover:bg-yellow-400 active:bg-yellow-400  ${
              router.pathname == "/shopingarea/" ? "bg-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faHouse} /> Home
            </div>
          </Link>{" "}
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full border-t  pl-2 hover:bg-yellow-400 active:bg-yellow-400 ${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 ">
              {" "}
              <FontAwesomeIcon icon={faBook} /> Books
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2 hover:bg-yellow-400 active:bg-yellow-400  border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faLaptop} /> Courses
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2 hover:bg-yellow-400 active:bg-yellow-400  border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faShirt} /> Clothing
            </div>
          </Link>
        </div>
        <div className="flex h-2/4 w-full flex-col">
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2 hover:bg-yellow-400 active:bg-yellow-400  border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faClock} /> Watches
            </div>
          </Link>{" "}
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2 hover:bg-yellow-400 active:bg-yellow-400  border-t${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faShoePrints} /> Shoes
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full border-t  pl-2 hover:bg-yellow-400 active:bg-yellow-400  ${
              router.pathname == "/shopingarea/" ? "text-yellow-400" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faMapLocationDot} /> Local Stores
            </div>
          </Link>
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2 hover:bg-yellow-400 active:bg-yellow-400 border-t${
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
