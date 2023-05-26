import "../../../src/app/globals.css";

import React from "react";

import Image from "next/image";
import Rateing from "./rateing";

export default function ItemHorizontal({
  src,
  starsprops,
  name,
  descr,
  price,
  alt,
}: any) {
  return (
    <div className="flex flex-row">
      <div className="w-2/4">
        <Image
          src={src}
          // width={1000}
          // height={500}
          quality={75}
          alt={alt}
          className="pt-px"
        />
      </div>
      <div className="flex flex-col w-2/4 justify-evenly py-2 pl-2">
        <div className="text-xxs font-semibold pt-px">{name}</div>
        {/* <div className="text-xxs ">{descr}</div> */}
        <div className="text-yellow-400 text-xxs pt-px">
          <Rateing stars={starsprops} />
        </div>
        <div className="flex justify-between">
          <div className="text-xs text-red-600 font-semibold">{price} PLN</div>
          {/* <div className="text-xs opacity-75">Sale</div> */}
        </div>
      </div>
    </div>
  );
}
