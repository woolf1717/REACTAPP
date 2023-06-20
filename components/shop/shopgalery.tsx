import "../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import itemsList from "../shop/itemslist/itemslist";

import ItemHorizontal from "./shopcomponents/itemhorizontal";

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ShopGalery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const itemOne = itemsList[2];
  const itemTwo = itemsList[3];
  const itemThree = itemsList[4];
  return (
    <>
      <div className="col-start-1  col-end-3 row-start-5 row-end-7 rounded-md bg-neutral-50 px-2 pt-2">
        <div className="flex items-center justify-between px-2 ">
          <h1 className="pt-2 text-xs font-bold uppercase">
            new products in sales
          </h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>{" "}
        <div className="w-full pt-3">
          {" "}
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div className="w-full">
              <ItemHorizontal {...itemOne} />
            </div>
            <div>
              <ItemHorizontal {...itemTwo} />
            </div>
            <div>
              <ItemHorizontal {...itemThree} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
