import React from "react";

import { useSelector } from "react-redux";

const ShopingCart = () => {
  const cartState = useSelector((state: any) => state.shopCart.value);
  return <>{/* <div>{cartState}</div> */}</>;
};

export default ShopingCart;
