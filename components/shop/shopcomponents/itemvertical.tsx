import "../../../src/app/globals.css";

import Image from "next/image";

import React from "react";

import { useDispatch } from "react-redux";

import { flagPopupOn } from "../../redux/reduxFeatures/shopPopup";

import Rateing from "./rateing";

export default function ItemVertical({
  id,
  src,
  alt,
  name,
  counter,
  starsprops,
  price,
}: any) {
  const dispatch = useDispatch();
  return (
    <>
    {/* {console.log(id, alt, name, counter, starsprops, price)} */}
      <div
        onClick={() => {dispatch(flagPopupOn(id))}}
      >
        <div>
        {src &&
         (<Image
            src={src}
            width={75}
            height={75}
            quality={75}
            alt={alt}
            className="relative  left-1/2 -translate-x-2/4 pt-px"
          />)}
        </div>
        <div className="text-center text-xxxs font-semibold">{name}</div>
        <div className="flex flex-row justify-center text-xxxs text-yellow-400 ">
          {starsprops}
          <Rateing stars={starsprops} />
        </div>
        <div className="flex flex-row justify-center text-xs">
          {counter ? `In cart ${counter} pieces. ` : ""}
        </div>
        <div className="flex justify-center pt-px">
          <div className="pr-px text-xxs font-semibold text-red-600">
            {price}PLN
          </div>

          <div className="pl-px text-xxs opacity-75">Sale</div>
        </div>{" "}
      </div>
    </>
  );
}
