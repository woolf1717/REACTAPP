import "../../src/app/globals.css";

import React from "react";

import { useEffect, useState } from "react";
// https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ItemVertical from "./shopcomponents/itemvertical";

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
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getproducts";
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" }
      }
      const response = await fetch(api, postData);
      const res = await response.json();
      setData(res.products);
    }
    fetchData();
  }, []);

  const product = data[0];
  const productTwo = data[1];

  return (
    <>
      <div className="row-start-3 row-end-5 overflow-hidden rounded-md bg-neutral-50 pt-px">
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
              <ItemVertical {...product}/>
            </div>
            <div>
              <ItemVertical {...productTwo}/>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
