import "../../../src/app/globals.css";

import Image from "next/image";

import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { flagPopupOn } from "../../redux/reduxFeatures/shopPopup";

import Rateing from "./rateing";

export default function ItemHorizontal({
  src,
  starsprops,
  name,
  price,
  alt,
}: any) {
  const dispatch = useDispatch();
  const productState = useSelector((state: any) => state.popup.value);
  return (
    <>
      {" "}
      <div
        className="flex flex-row pt-2"
        onClick={() => dispatch(flagPopupOn(name))}
      >
        <div className="w-2/4">
          <Image
            src={src}
            width={75}
            height={75}
            quality={75}
            alt={alt}
            className="pt-px"
          />
        </div>
        <div className="flex w-2/4 flex-col justify-evenly py-2 pl-2">
          <div className="pt-px text-xs font-semibold">{name}</div>
          {/* <div className="text-xxs ">{descr}</div> */}
          <div className="pt-px text-xxxs text-yellow-400">
            <Rateing stars={starsprops} />
          </div>
          <div className="flex justify-between">
            <div className="text-xxs font-semibold text-red-600">
              {price} PLN
            </div>
            {/* <div className="text-xs opacity-75">Sale</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
