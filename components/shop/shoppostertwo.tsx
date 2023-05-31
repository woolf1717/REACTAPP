import "../../src/app/globals.css";

import Image from "next/image";

import React from "react";

import modelPhoto from "../../src/pictures/woman-RonLach.jpg";

export default function ShopPosterTwo() {
  return (
    <>
      <div className=" overflow-hidden rounded-md  bg-black col-start-1 col-end-3 row-start-9 row-end-11">
        <div className="relative ">
          <div>
            <Image
              src={modelPhoto}
              quality={100}
              alt="Andrea Piacquadio"
              className="justify-center absolute -translate-y-2 opacity-50"
            />
          </div>{" "}
          <div className="absolute w-full text-center justify-center pt-8">
            <p className="uppercase text-xl font-semibold text-amber-50 pt-px">
              new collection
            </p>
            <p className="text-xxs text-amber-50 opacity-80">
              Lorem ipsum dolor sit amet.
            </p>
            <button className="mt-3 uppercase text-xxs font-semibold bg-yellow-400 py-2 px-5 rounded-sm">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
