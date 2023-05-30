import "../../src/app/globals.css";

import React from "react";

import ItemHorizontal from "./shopcomponents/itemhorizontal";

import shirt from "../../src/pictures/products/koszula/Przechwytywanie.jpg";
import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";
import watch from "../../src/pictures/products/zegarek/2.jpg";
import spodnie from "../../src/pictures/products/spodnie/2.jpg";

import bag from "../../src/pictures/products/torba/3.jpg";
import jacket from "../../src/pictures/products/kurtka/Przechwytywanie.jpg";

export default function ShopNewOffers() {
  return (
    <>
      <div className="bg-neutral-50 px-2 pt-2 overflow-hidden rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-sm font-bold ">NewOffer</h1>
          <h2 className=" text-xs font-semibold  text-yellow-400">More</h2>
        </div>
        <div>
          {" "}
          <div className="relative flex flex-col items-center">
            <div className="px-2 pb-px pt-2">
              <ItemHorizontal
                src={bag}
                starsprops={5}
                name={"Bag"}
                price={2200}
                alt={""}
                descr={""}
              />
            </div>
            <div className="px-2 pb-px pt-2">
              <ItemHorizontal
                src={jacket}
                starsprops={3.5}
                name={"Men shirt two"}
                price={1699}
                alt={""}
                descr={""}
              />
            </div>
            <div className="px-2 pb-px pt-2">
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
                src={spodnie}
                starsprops={4}
                name={"Men trousers"}
                price={600}
                alt={""}
                descr={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
