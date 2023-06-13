import "../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ItemHorizontal from "./shopcomponents/itemhorizontal";

import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";

export default function ShopGalery() {
  return (
    <>
      <div className="col-start-1  col-end-3 row-start-5 row-end-7 rounded-md bg-neutral-50 px-2 pt-2">
        <div className="flex items-center justify-between px-2 ">
          <h1 className="text-xs font-bold uppercase">new products in sales</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>{" "}
        <div className="relative flex flex-row items-center justify-around pt-2 ">
          <FontAwesomeIcon icon={faCaretLeft} />
          <div className="z-10 w-full px-px pb-px pt-2">
            <ItemHorizontal
              src={shoes}
              starsprops={5}
              name={"Shoes"}
              price={850}
              alt={""}
              descr={"Opis produktu (krótki opis). Buty trekingowe"}
            />
          </div>
          <div className="z-10 w-full px-px pb-px pt-2">
            <ItemHorizontal
              src={shirtTwo}
              starsprops={3.5}
              name={"Men shirt two"}
              price={500}
              alt={""}
              descr={"Opis produktu (krótki opis)"}
            />
          </div>{" "}
          <FontAwesomeIcon icon={faCaretRight} />
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
