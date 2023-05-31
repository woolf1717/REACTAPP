import "../../src/app/globals.css";

import React from "react";

// import ItemHorizontal from "./shopcomponents/itemHorizoItemHorizontal";

import shirt from "../../src/pictures/products/koszula/Przechwytywanie.jpg";
import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";
import watch from "../../src/pictures/products/zegarek/2.jpg";
import trousers from "../../src/pictures/products/spodnie/2.jpg";

import bag from "../../src/pictures/products/torba/Przechwytywanie.jpg";
import jacket from "../../src/pictures/products/kurtka/Przechwytywanie.jpg";
import ItemHorizontal from "./shopcomponents/itemhorizontal";

export default function ShopNewOffers() {
  return (
    <>
      <div className="bg-neutral-50  px-2 pt-2 rounded-md col-start-1 col-end-3 row-start-7 row-end-9">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xs font-bold ">NewOffer</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>
        <div>
          {" "}
          <div className="relative flex flex-row justify-around block ">
            <div className="px-px pb-px pt-2 z-10 w-full">
              <ItemHorizontal
                src={bag}
                // width={150}
                starsprops={5}
                name={"Bag"}
                price={2200}
                alt={""}
                descr={""}
              />
            </div>
            <div className="px-px pb-px pt-2 z-10 w-full">
              <ItemHorizontal
                src={jacket}
                // width={250}
                starsprops={3.5}
                name={"Jacket"}
                price={1699}
                alt={""}
                descr={""}
              />
            </div>
            {/* <div className="px-2 pb-px pt-2">
              <ItemHorizontal
                src={watch}
                starsprops={4.5}
                name={"Men watch"}
                price={1799}
                alt={""}
                descr={""}
              />
            </div>
            <div className="px-2 pb-px pt-2">
              <ItemHorizontal
                src={trousers}
                starsprops={4}
                name={"Men trousers"}
                price={600}
                alt={""}
                descr={""}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
