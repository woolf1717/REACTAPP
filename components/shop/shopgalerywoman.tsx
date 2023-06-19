import "../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ItemVertical from "./shopcomponents/itemvertical";

import shirtTwo from "../../src/pictures/products/koszula2/Przechwytywanie.jpg";
import shoes from "../../src/pictures/products/buty2/Przechwytywanie.jpg";
import watch from "../../src/pictures/products/zegarek/2.jpg";
import trousers from "../../src/pictures/products/spodnie/2.jpg";

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import src from "../../src/Books/1.svg";

export default function ShopGaleryWoman() {
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
      items: 4,
    },
  };
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          </Carousel>
        </div>
      </div>
      {/* <Image
        src={src}
        width={50}
        height={50}
        quality={75}
        alt={"opis"}
        className="pt-px"
      /> */}
    </>
  );
}
