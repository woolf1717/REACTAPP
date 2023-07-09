import "../src/app/globals.css";
import { useEffect, useState } from "react";
import React from "react";


import bag from "../src/pictures/products/bag/1.jpg"

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getdata";
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
          <div key={product.product_id}>
            <div>Product ID:{product.product_id}</div>
            <div>Name:{product.name}</div>
            <div>Starsprops:{product.starsprops}</div>
            <div>
              {/* <img src={bag} alt="" /> */}
            </div>
            {/* <div>{`${JSON.stringify(product)}`}</div> */}
            <div></div>
          </div>
        );
      })}
    </>
  );
}
