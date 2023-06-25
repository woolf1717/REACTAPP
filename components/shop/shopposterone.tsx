import "../../src/app/globals.css";

import Image from "next/image";

import React from "react";

import modelPhoto from "../../src/pictures/handsome-man.jpg";

import { useSelector } from "react-redux";

export default function ShopPosterOne() {
  const cartState = useSelector((state: any) => state.shopCart.value);
  return (
    <>
      <div className=" col-start-1 col-end-3 row-start-1  row-end-3 overflow-hidden rounded-md bg-black">
        <div className="relative">
          <div>
            <Image
              src={modelPhoto}
              quality={100}
              alt="Andrea Piacquadio"
              className="absolute -translate-y-2 justify-center opacity-50"
            />
          </div>{" "}
          <div className="absolute pl-6 pt-8">
            <p className="text-xs font-semibold uppercase text-yellow-400 opacity-80">
              top quality
            </p>
            <p className="pt-px text-sm font-semibold uppercase text-amber-50">
              {`${JSON.stringify(cartState)}`}
            </p>
            <p className=" text-xxs text-amber-50 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-3 rounded-sm bg-yellow-400 px-5 py-2 text-xxs font-semibold uppercase ">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
