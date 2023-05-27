import "../../src/app/globals.css";

import bg from "../../src/pictures/handsome-man.jpg";

import React from "react";

import Image from "next/image";
import modelPhoto from "../../src/pictures/woman-RonLach.jpg";
export default function ShopPosterTwo() {
  return (
    <>
      <div className="row-start-9 row-end-12 col-start-2 col-end-5 overflow-hidden rounded-md  bg-black">
        <div className="relative ">
          <div>
            <Image
              src={modelPhoto}
              quality={100}
              alt="Andrea Piacquadio"
              className="justify-center absolute -translate-y-2 opacity-50"
            />
          </div>{" "}
          <div className="absolute w-full text-center justify-center pt-14">
            <p className="uppercase text-2xl font-semibold text-amber-50 pt-px">
              new collection
            </p>
            <p className="text-xs text-amber-50 opacity-80">
              Lorem ipsum dolor sit amet.
            </p>
            <button className="mt-3 uppercase text-sm font-semibold bg-yellow-400 py-2 px-5 rounded-sm">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
