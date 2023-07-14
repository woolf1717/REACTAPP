import "../src/app/globals.css";
import { useEffect, useState } from "react";
import React from "react";


import Image from "next/image";
import itemsList from "../components/shop/itemslist/itemslist.mjs";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getdata-lib";
      const response = await fetch(api);
      const res = await response.json();
      console.log(res.products);
      setData(res.products);
    }
    fetchData();
  }, []);

  return (
    <> 

      {data.map((product) => {
        return (
          <div key={product.product_id} className="flex flex-col">
            <div>
            <div>Product ID:{product.product_id}</div>
            <div>Name:{product.name}</div>
            <div>Starsprops:{product.starsprops}</div>
            {/* {`${product.src}`} */}
            </div>
            {/* <div>{`${JSON.stringify(product)}`}</div> */}
            <div className="h-26 m-2 block w-52 block">
            <Image
            src={itemsList.find(el => el.name === product.name).src}
            alt="Picture of the author"
            />
            </div>
          </div>
        );
      })}
    </>
  );
}
