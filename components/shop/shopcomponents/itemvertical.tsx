import "../../../src/app/globals.css";

import React from "react";

import Image from "next/image";

// import MyEval from './eval.macro'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ItemVertical({ src, starsprops, name, price }: any) {
  const fullStar = (
    <FontAwesomeIcon icon={icon({ name: "star", style: "solid" })} />
  );
  const halfStar = (
    <FontAwesomeIcon
      icon={icon({ name: "star-half-stroke", style: "solid" })}
    />
  );

  const emptyStar = (
    <FontAwesomeIcon icon={icon({ name: "star", style: "regular" })} />
  );
  return (
    <>
      <div>
        <Image
          src={src}
          // width={1000}
          // height={500}
          quality={75}
          alt="Andrea Piacquadio"
          className=""
        />
      </div>
      <div className="text-sm font-semibold">{name}</div>
      <div className="text-yellow-400">
        {starsprops}
        {fullStar}
        {fullStar}
        {halfStar}
        {emptyStar}
        {emptyStar}
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-red-600 font-semibold">{price} PLN</div>
        <div className="text-sm">Sale</div>
      </div>
    </>
  );
}
