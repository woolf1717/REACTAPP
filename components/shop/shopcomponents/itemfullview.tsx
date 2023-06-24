﻿import "../../../src/app/globals.css";

import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { flagPopupOff } from "../../redux/reduxFeatures/shopPopup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import Rateing from "./rateing";
import itemsList from "../../shop/itemslist/itemslist";

import { addToCart } from "../../redux/reduxFeatures/shopCart";

import { useState } from "react";

import Image from "next/image";

export default function ItemFullView() {
  let outcome;
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const hideFlagPopup = () => {
    dispatch(flagPopupOff());
    setCounter(0);
  };

  const productState = useSelector((state: any) => state.popup.value);
  const currentProduct: any = itemsList.find((el) => el.name === productState);
  const cartState = useSelector((state: any) => state.shopCart.value);
  const cartStateOfCurrentProduct = cartState.find(
    (el): any => el.name === productState.name
  );
  let leftTooAdd;

  // I must find the product in array caled cartState and chceck what number does it represent

  if (productState) {
    outcome = (
      <div className="relative">
        <div className="fixed z-10 h-screen w-screen bg-blue-950 text-lg opacity-75"></div>{" "}
        <div className="fixed z-20 mx-4 mt-16 box-border  h-96 w-11/12 overflow-hidden rounded-md bg-neutral-50 opacity-100">
          <div className="flex justify-end pr-2 pt-2">
            <FontAwesomeIcon
              icon={faX}
              onClick={hideFlagPopup}
              className="pl-2"
            />
          </div>
          <div>
            <div>
              <Image
                src={currentProduct.src}
                width={150}
                height={150}
                quality={75}
                alt={currentProduct.alt}
                className="relative  left-1/2 -translate-x-2/4 pt-px"
              />
            </div>
            <div className="text-center text-xs font-semibold">
              {currentProduct.name}
            </div>
            <div className="flex flex-row justify-center pt-2 text-xs text-yellow-400 ">
              {currentProduct.starsprops}
              <Rateing stars={currentProduct.starsprops} />
            </div>{" "}
            <div className="flex justify-around text-xs">
              Available in stock ({currentProduct.count})
            </div>
            <div className="flex justify-around">
              <div className="justify-around text-xl ">
                {currentProduct.descr}
              </div>
            </div>
            <div className="flex justify-around pt-px">
              <div className="text-xxl font-semibold text-red-600">
                {currentProduct.price} PLN asadsasdas
              </div>
              <div className="text-xxl opacity-75">
                {/* In cart {cartStateOfCurrentProduct} */}
              </div>
            </div>{" "}
            <div className="flex justify-around pt-1.5">
              <div className="text-xxl font-semibold">
                <button
                  className="bodrer-solid border-2 px-2"
                  onClick={() => {
                    if (counter > 0) setCounter(counter - 1);
                  }}
                >
                  -
                </button>
                <span className="px-2">{counter}</span>
                <button
                  className="bodrer-solid border-2 px-2"
                  onClick={() => {
                    if (counter < currentProduct.count) setCounter(counter + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>{" "}
            <div className="flex justify-around pt-1.5">
              <button
                className="bodrer-solid border-2 px-2"
                onClick={() => {
                  //
                  // console.log({counter} {currentProduct.name});
                  dispatch(
                    addToCart({ name: currentProduct.name, counter: counter })
                  );
                  leftTooAdd = currentProduct.count;
                  setCounter(0);
                  console.log(
                    leftTooAdd,
                    productState,
                    currentProduct.count,
                    cartState
                  );
                }}
              >
                Add to cart
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  } else {
    ("");
  }
  return <>{outcome}</>;
}