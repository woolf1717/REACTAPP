import "../../../src/app/globals.css";

import React from "react";

import Image from "next/image";
import Rateing from "./rateing";

export default function ItemVertical({
  src,
  width,
  alt,
  name,
  descr,
  starsprops,
  price,
}: any) {
  return (
    <>
      <div>
        <Image
          src={src}
          width={width}
          // width={1000}
          // height={500}
          quality={75}
          alt={alt}
          className="pt-px"
        />
      </div>
      <div className="text-xxxs font-semibold text-center">{name}</div>
      <div className="text-xxxs  ">{descr}</div>
      <div className="text-yellow-400 text-xxxs flex flex-row justify-center ">
        {starsprops}
        <Rateing stars={starsprops} />
      </div>
      <div className="flex justify-around pt-px">
        <div className="text-xxs text-red-600 font-semibold">{price} PLN</div>
        <div className="text-xxs opacity-75">Sale</div>
      </div>
    </>
  );
}
