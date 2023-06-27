import "../../src/app/globals.css";

import React from "react";
// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ItemVertical from "./shopcomponents/itemvertical";

import itemsList from "../shop/itemslist/itemslist";

export default function ShopGaleryWoman() {
  const responsive = {
    superLargeDesktop: {
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
      items: 4,
    },
  };
  const itemOne = itemsList[7];
  const itemTwo = itemsList[2];
  const itemThree = itemsList[3];
  const itemFour = itemsList[4];

  return (
    <>
      <div className="relative col-start-1 col-end-3 row-start-11 row-end-13 flex flex-col overflow-hidden rounded-md bg-neutral-50 p-2 ">
        <div className="flex items-center justify-between pt-px ">
          <h1 className="text-sm font-bold uppercase ">
            new products in sales
          </h1>
          <h2 className=" text-xs font-semibold  text-yellow-400">More</h2>
        </div>
        <div className="pt-2">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div>
              <ItemVertical {...itemOne} />
            </div>
            <div>
              <ItemVertical {...itemTwo} />
            </div>
            <div>
              <ItemVertical {...itemThree} />
            </div>
            <div>
              <ItemVertical {...itemFour} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
