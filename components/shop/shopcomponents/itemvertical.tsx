import "../../../src/app/globals.css";

import React from "react";

import Image from "next/image";
import Rateing from "./rateing";

export default function ItemVertical({
  src,
  starsprops,
  name,
  descr,
  price,
  alt,
}: any) {
  return (
    <>
      <div>
        <Image
          src={src}
          // width={1000}
          // height={500}
          quality={75}
          alt={alt}
          className="pt-px"
        />
      </div>
      <div className="text-sm font-semibold pt-px">{name}</div>
      <div className="text-xs ">{descr}</div>
      <div className="text-yellow-400 text-xs pt-px flex flex-row">
        {starsprops}
        <Rateing stars={starsprops} />
      </div>
      <div className="flex justify-between">
        <div className="text-xs text-red-600 font-semibold">{price} PLN</div>
        <div className="text-xs opacity-75">Sale</div>
      </div>
    </>
  );
}
