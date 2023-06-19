import "../../src/app/globals.css";

import React from "react";

import ItemVertical from "./shopcomponents/itemvertical";

import shirt from "../../src/pictures/products/koszula/Przechwytywanie.jpg";
import trousers from "../../src/pictures/products/spodnie/2.jpg";

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useState } from "react";
export default function ShopTopSale() {
  const [articleVisible, setArticleVisible] = useState(0);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
              {" "}
              <ItemVertical
                src={trousers}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={1}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
            <div>
              {" "}
              <ItemVertical
                src={shirt}
                width={75}
                height={75}
                starsprops={2.5}
                name={"Men shirt"}
                price={500}
                alt={""}
                id={0}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
