import "../../src/app/globals.css";

import React from "react";

import ItemHorizontal from "./shopcomponents/itemhorizontal";

import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";

export default function ShopGalery() {
  return (
    <>
      <div className="bg-neutral-50 col-start-1 col-end-3 row-start-5 row-end-7 p-px overflow-hidden rounded-md flex flex-col relative">
        <div className="flex justify-between items-center pt-2 px-2">
          <h1 className="uppercase text-xs font-bold">new products in sales</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>
        <div className="relative flex items-center pt-2">
          <div className=" pl-4">
            <ItemHorizontal
              src={shoes}
              starsprops={5}
              name={"Shoes"}
              price={850}
              alt={""}
              descr={"Opis produktu (krótki opis). Buty trekingowe"}
            />
          </div>
          <div className="pr-4">
            <ItemHorizontal
              src={shirtTwo}
              starsprops={3.5}
              name={"Men shirt two"}
              price={500}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div>
          {/* Here i want to make galery */}
          {/* <div className="p-2">
            <ItemHorizontal
              src={watch}
              starsprops={4.5}
              name={"Men watch"}
              price={1799}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-2">
            <ItemHorizontal
              src={spodnie}
              starsprops={4}
              name={"Men trousers"}
              price={600}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
