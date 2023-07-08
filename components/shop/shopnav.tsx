import "../../src/app/globals.css";

import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBook,
  faCartShopping,
  faClock,
  faHouse,
  faLaptop,
  faShirt,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopNav() {
  const router = useRouter();

  return (
    <>
      <div className="row-start-3 row-end-5 flex h-40 flex-col items-center  overflow-hidden rounded-md bg-neutral-50 py-px text-xs font-semibold">
        <div className="flex h-2/4 w-full flex-col">
          <Link
            href={"/shopingarea"}
            className={`relative h-1/4 w-full pl-2  pt-px ${
              router.pathname == "/shopingarea" ? "bg-yellow-400 pl-4" : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faHouse} /> Home
            </div>
          </Link>{" "}
          <Link
            href={"/shopingarea/books"}
            className={`relative h-1/4 w-full border-t  pl-2 ${
              router.pathname == "/shopingarea/books"
                ? "bg-yellow-400 pl-4"
                : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 ">
              {" "}
              <FontAwesomeIcon icon={faBook} /> Books
            </div>
          </Link>
          <Link
            href={"/shopingarea/courses"}
            className={`relative h-1/4 w-full border-t  pl-2 ${
              router.pathname == "/shopingarea/courses"
                ? "bg-yellow-400  pl-4"
                : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faLaptop} /> Courses
            </div>
          </Link>
          <Link
            href={"/shopingarea/clothing"}
            className={`relative h-1/4 w-full border-t pl-2 ${
              router.pathname == "/shopingarea/clothing"
                ? "bg-yellow-400  pl-4"
                : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faShirt} /> Clothing
            </div>
          </Link>
        </div>
        <div className="flex h-2/4 w-full flex-col">
          <Link
            href={"/shopingarea/watches"}
            className={`relative h-1/4 w-full border-t pl-2 ${
              router.pathname == "/shopingarea/watches"
                ? "bg-yellow-400  pl-4"
                : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faClock} /> Watches
            </div>
          </Link>{" "}
          <Link
            href={"/shopingarea/shoes"}
            className={`relative h-1/4 w-full border-t pl-2 ${
              router.pathname == "/shopingarea/shoes"
                ? "bg-yellow-400  pl-4"
                : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faShoePrints} /> Shoes
            </div>
          </Link>
          <Link
            href={"/shopingarea/cart"}
            className={`relative h-1/4 w-full border-t  pl-2 ${
              router.pathname == "/shopingarea/cart"
                ? "bg-yellow-400 pl-4  "
                : ""
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </div>
          </Link>
          <Link
            href={"/contact"}
            className={`relative h-1/4 w-full border-t pl-2 ${
              router.pathname == "/contact" ? "bg-text-yellow-400  pl-4" : ""
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
