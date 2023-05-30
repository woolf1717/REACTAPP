import "../../src/app/globals.css";

import bg from "../../src/pictures/handsome-man.jpg";

import React from "react";

import Image from "next/image";
import modelPhoto from "../../src/pictures/handsome-man.jpg";
export default function ShopPosterOne() {
  return (
    <>
      <div className=" overflow-hidden rounded-md bg-black">
        <div className="relative">
          <div>
            <Image
              src={modelPhoto}
              quality={100}
              alt="Andrea Piacquadio"
              className="justify-center absolute -translate-y-2 opacity-50"
            />
          </div>{" "}
          <div className="pl-14 pt-16 absolute">
            <p className="uppercase text-sx font-semibold text-yellow-400 opacity-80">
              top quality
            </p>
            <p className="uppercase text-2xl font-semibold text-amber-50 pt-px">
              new collection
            </p>
            <p className=" text-xs text-amber-50 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-3 uppercase text-sm font-semibold bg-yellow-400 py-2 px-5 rounded-sm ">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
