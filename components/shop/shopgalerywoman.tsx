import "../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ItemVertical from "./shopcomponents/itemvertical";

import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";
import watch from "../../src/pictures/products/zegarek/2.jpg";
import trousers from "../../src/pictures/products/spodnie/2.jpg";

export default function ShopGaleryWoman() {
  return (
    <>
      <div className="relative col-start-1 col-end-3 row-start-11 row-end-13 flex flex-col overflow-hidden rounded-md bg-neutral-50 p-2 ">
        <div className="flex items-center justify-between pt-2 ">
          <h1 className="text-sm font-bold uppercase ">
            new products in sales
          </h1>
          <h2 className=" text-xs font-semibold  text-yellow-400">More</h2>
        </div>
        <div className="relative flex items-center">
          <FontAwesomeIcon icon={faCaretLeft} />
          <div className="p-px">
            <ItemVertical
              src={shirtTwo}
              width={60}
              height={60}
              starsprops={3.5}
              name={"Men shirt two"}
              price={500}
              alt={""}

              // descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-px">
            <ItemVertical
              src={trousers}
              width={60}
              height={60}
              starsprops={4}
              name={"Men trousers"}
              price={600}
              alt={""}

              // descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-px">
            <ItemVertical
              src={watch}
              width={60}
              height={60}
              starsprops={4.5}
              name={"Men watch"}
              price={1799}
              alt={""}

              // descr={"Opis produktu (krótki opis)"}
            />
          </div>
          <div className="p-px">
            <ItemVertical
              src={shoes}
              width={60}
              height={60}
              starsprops={5}
              name={"Shoes"}
              price={850}
              alt={""}

              // descr={"Opis produktu (krótki opis). Buty trekingowe"}
            />
          </div>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    </>
  );
}
