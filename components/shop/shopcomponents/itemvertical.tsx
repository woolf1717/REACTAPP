import "../../../src/app/globals.css";

import Image from "next/image";

import React from "react";

import Rateing from "./rateing";

export default function ItemVertical({
  src,
  width,
  height,
  alt,
  name,
  descr,
  starsprops,
  price,
}: any) {
  return (
    <>
      <div className="">
        <Image
          src={src}
          width={75}
          height={75}
          quality={75}
          alt={alt}
          className="relative  left-1/2 -translate-x-2/4 pt-px"
        />
      </div>
      <div className="text-center text-xxxs font-semibold">{name}</div>
      <div className="text-xxxs  ">{descr}</div>
      <div className="flex flex-row justify-center text-xxxs text-yellow-400 ">
        {starsprops}
        <Rateing stars={starsprops} />
      </div>
      <div className="flex justify-around pt-px">
        <div className="text-xxs font-semibold text-red-600">{price} PLN</div>
        <div className="text-xxs opacity-75">Sale</div>
      </div>
    </>
  );
}
