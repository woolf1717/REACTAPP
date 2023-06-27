import "../../src/app/globals.css";

import React from "react";

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ItemVertical from "./shopcomponents/itemvertical";

import itemsList from "../shop/itemslist/itemslist";

export default function ShopTopSale() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const itemOne = itemsList[0];
  const itemTwo = itemsList[1];

  return (
    <>
      <div className="row-start-3  row-end-5 overflow-hidden rounded-md bg-neutral-50 pt-px">
        <div className="flex items-center justify-between">
          <h1 className="text-xxs font-bold uppercase ">hot sale</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>{" "}
        <div className="text-xxspt h-full pt-2">
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
          </Carousel>
        </div>
      </div>
    </>
  );
}
