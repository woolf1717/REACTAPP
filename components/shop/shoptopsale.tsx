import "../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ItemVertical from "./shopcomponents/itemvertical";

import shirt from "../../src/pictures/products/koszula/Przechwytywanie.jpg";

export default function ShopTopSale() {
  return (
    <>
      <div className="row-start-3  row-end-5 overflow-hidden rounded-md bg-neutral-50 px-4 pt-px">
        <div className="flex items-center justify-between">
          <h1 className="text-xxs font-bold uppercase ">hot sale</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>
        <div className="flex flex-row items-center pt-2">
          <FontAwesomeIcon icon={faCaretLeft} />
          <div className="flex flex-col px-4 pt-px">
            {" "}
            <ItemVertical
              src={shirt}
              width={75}
              height={75}
              starsprops={2.5}
              name={"Men shirt"}
              price={500}
              alt={""}
            />
          </div>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    </>
  );
}
