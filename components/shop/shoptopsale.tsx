import "../../src/app/globals.css";

import React from "react";
import ItemVertical from "./shopcomponents/itemvertical";

import shirt from "../../src/pictures/products/koszula/Przechwytywanie.jpg";

export default function ShopTopSale() {
  return (
    <>
      <div className="bg-neutral-50 px-4 pt-2 overflow-hidden rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-lg font-bold ">hot sale</h1>
          <h2 className=" text-sm font-semibold  text-yellow-400">More</h2>
        </div>
        <div>
          <ItemVertical
            src={shirt}
            starsprops={2.5}
            name={"Men shirt"}
            price={500}
          />
        </div>
      </div>
    </>
  );
}
