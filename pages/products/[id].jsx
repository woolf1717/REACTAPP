import "../../src/app/globals.css";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"

import Image from "next/image";

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    async function fetchData() {
      const api = "http://localhost:3000/api/getdata-lib";
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
        })
      }
      const response = await fetch(api, postData);
      const res = await response.json();
      console.log(res)
      setData(res.products);
    }
    fetchData();
  }, [router.isReady]);

  const generateImageFromBuffer = buffer => {
    let _buffer = new Buffer.from(buffer, 'base64');;
    const encodedBase64 = `${_buffer.toString('base64')}`
    return (
        <div>
          <Image
            width={250}
            height={250}
            quality={75}
            alt={"alt"}
            src={`data:image/png;base64,${encodedBase64}`}
          />
        </div>
      );
    }

  return (
    <>
      {data.map((product) => {
        return (
          <div key={product.product_id} className="flex flex-col">
            <div>
            <div>Product ID:{product.product_id}</div>        
            <div className="h-26 m-2 block w-52 block">
            <div className="p-2">{generateImageFromBuffer(product.src)}</div>
           {/* <div className="p-2">
           {generateImageFromBuffer(product.photoOne)}
           </div>
           <div className="p-2">
           {generateImageFromBuffer(product.photoTwo)}
           </div>
           <div className="p-2">
           {generateImageFromBuffer(product.photoThree)}
           </div> */}
            </div>
            <div>Name: {product.name}</div>
            <div>Starsprops: {product.starsprops}</div>
            <div>Price: {product.price}</div>
            <div>Count: {product.count}</div>
            <div>Alt: {product.alt}</div>
            <div>Descr: {product.descr}</div>
            <div>Fulldescr: {product.fulldescr}</div>
            </div>    
          </div>
        );
      })}
    </>
  );
}
