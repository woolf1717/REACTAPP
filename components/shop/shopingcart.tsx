import React from "react";

import { useAppSelector } from "../redux/reduxHooks/hooks";
import ItemVertical from "./shopcomponents/itemvertical";

import itemsList from "./itemslist/itemslist";

const ShopingCart = () => {
  const cartState = useAppSelector((state) => state.shopCart.value);
  const currentCart = () => {
    const array = [];
    for (let i = 0; i < cartState.length; i++) {
      array.push(
        <div className="my-2 rounded-md bg-neutral-50 p-2" key={i}>
          <ItemVertical
            {...itemsList[
              itemsList.findIndex((el) => el.name === cartState[i].name)
            ]}
            counter={cartState[i].counter}
          />
        </div>
      );
    }
    return array;
  };
  return (
    <>
      {
        <div>
          <br />
          {currentCart()}
          <br />
          <div className="flex w-full justify-center">
            <button className="border-2 border-black bg-white px-2">
              {" "}
              Confirm order and pay.{" "}
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default ShopingCart;
