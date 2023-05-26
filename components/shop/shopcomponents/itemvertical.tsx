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
}: any) {
  return (
    <>
      <div>
        <Image
          src={src}
          // width={1000}
          // height={500}
          quality={75}
          alt="Andrea Piacquadio"
          className="pt-2"
        />
      </div>
      <div className="text-sm font-semibold pt-2">{name}</div>
      <div className="text-xs pt-2">{descr}</div>
      <div className="text-yellow-400 ">
        <Rateing stars={starsprops} />
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-red-600 font-semibold">{price} PLN</div>
        <div className="text-sm">Sale</div>
      </div>
    </>
  );
}
