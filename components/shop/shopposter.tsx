import "../../src/app/globals.css";

import bg from "../../src/pictures/handsome-man.jpg";

import React from "react";

import Image from "next/image";
import profilePic from "../../src/pictures/handsome-man.jpg";
export default function ShopPoster() {
  return (
    <>
      <div className=" col-start-2 col-end-5 overflow-hidden rounded-md  bg-black">
        <div className="relative ">
          <div>
            <Image
              src={profilePic}
              // width={1000}
              // height={500}
              quality={100}
              alt="Andrea Piacquadio"
              className="justify-center absolute -translate-y-2 opacity-50"
            />
          </div>{" "}
          <div className="pl-14 pt-12 absolute">
            <p className="uppercase text-lg font-semibold text-yellow-400 opacity-80">
              top quality
            </p>
            <p className="uppercase text-2xl font-semibold text-amber-50 pt-px">
              new collection
            </p>
            <p className=" text-sm text-amber-50 pt-2 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 uppercase font-semibold bg-yellow-400 py-2 px-4 rounded-sm ">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
