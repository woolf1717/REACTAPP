import "../../src/app/globals.css";

import Image from "next/image";

import React from "react";

import modelPhoto from "../../src/pictures/handsome-man.jpg";

export default function ShopPosterOne() {
  return (
    <>
      <div className=" overflow-hidden rounded-md bg-black  col-start-1 col-end-3 row-start-1 row-end-3">
        <div className="relative">
          <div>
            <Image
              src={modelPhoto}
              quality={100}
              alt="Andrea Piacquadio"
              className="justify-center absolute -translate-y-2 opacity-50"
            />
          </div>{" "}
          <div className="pl-6 pt-8 absolute">
            <p className="uppercase text-xs font-semibold text-yellow-400 opacity-80">
              top quality
            </p>
            <p className="uppercase text-xl font-semibold text-amber-50 pt-px">
              new collection
            </p>
            <p className=" text-xxs text-amber-50 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-3 uppercase text-xxs font-semibold bg-yellow-400 py-2 px-5 rounded-sm ">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
