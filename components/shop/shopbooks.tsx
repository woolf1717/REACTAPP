import "../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import bag from "../../src/pictures/products/torba/Przechwytywanie.jpg";
import jacket from "../../src/pictures/products/kurtka/Przechwytywanie.jpg";
import ItemHorizontal from "./shopcomponents/itemhorizontal";

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import src from "../../src/Books/1.svg";

export default function ShopBooks() {
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
  return (
    <>
      <div className="rounded-md bg-neutral-50 px-2 pt-2">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-xs font-bold uppercase ">NewOffer</h1>
          <h2 className=" text-xxs font-semibold  text-yellow-400">More</h2>
        </div>

        <div className="w-full py-3">
          {" "}
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div className="w-full">
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          </Carousel>
        </div>
      </div>
    </>
  );
}
