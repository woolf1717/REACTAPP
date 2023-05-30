import "../../src/app/globals.css";

import React from "react";

import ItemVertical from "./shopcomponents/itemvertical";
import shirt from "../../src/pictures/products/koszula/Przechwytywanie.jpg";

import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";
import watch from "../../src/pictures/products/zegarek/2.jpg";
import spodnie from "../../src/pictures/products/spodnie/2.jpg";

export default function ShopGaleryWoman() {
  return (
    <>
      <div className="bg-neutral-50 p-4 overflow-hidden rounded-md flex flex-col relative">
        <div className="flex justify-between items-center ">
          <h1 className="uppercase text-sm font-bold ">
            new products in sales
          </h1>
          <h2 className=" text-xs font-semibold  text-yellow-400">More</h2>
        </div>
        <div className="relative flex items-center">
          <div className="p-2">
            <ItemVertical
              src={shirtTwo}
              starsprops={3.5}
              name={"Men shirt two"}
              price={500}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-2">
            <ItemVertical
              src={spodnie}
              starsprops={4}
              name={"Men trousers"}
              price={600}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-2">
            <ItemVertical
              src={watch}
              starsprops={4.5}
              name={"Men watch"}
              price={1799}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-2">
            <ItemVertical
              src={shoes}
              starsprops={5}
              name={"Shoes"}
              price={850}
              alt={""}
              descr={"Opis produktu (krótki opis). Buty trekingowe"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
