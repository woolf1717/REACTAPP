import "../src/app/globals.css";
import { useEffect, useState } from "react";
import React from "react";

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
            <div>{product.name}</div>
            <div>{`${JSON.stringify(product.src.data)}`}</div>
            <div></div>
          </div>
        );
      })}
    </>
  );
}
