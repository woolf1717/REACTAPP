import "../../src/app/globals.css";

import React from "react";

import bag from "../../src/pictures/products/torba/Przechwytywanie.jpg";
import jacket from "../../src/pictures/products/kurtka/Przechwytywanie.jpg";
import ItemHorizontal from "./shopcomponents/itemhorizontal";

export default function ShopNewOffers() {
  return (
    <>
      <div className="col-start-1  col-end-3 row-start-7 row-end-9 rounded-md bg-neutral-50 px-2 pt-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xs font-bold uppercase ">NewOffer</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>
        <div>
          {" "}
          <div className="relative block flex flex-row justify-around ">
            <div className="z-10 w-full px-px pb-px pt-2">
              <ItemHorizontal
                src={bag}
                width={75}
                height={75}
                starsprops={5}
                name={"Bag"}
                price={2200}
                alt={""}
                descr={""}
              />
            </div>
            <div className="z-10 w-full px-px pb-px pt-2">
              <ItemHorizontal
                src={jacket}
                width={75}
                height={75}
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
