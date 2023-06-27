import "../../src/app/globals.css";

import ReduxContainer from "../../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../../components/container";
import Footer from "../../components/footer";
import ItemFullView from "../../components/shop/shopcomponents/itemfullview";
import Menu from "../../components/menu";
import ShopingCart from "../../components/shop/shopingcart";
import ShopNav from "../../components/shop/shopnav";

export default function Cart() {
  return (
    <>
      <ReduxContainer>
        <ItemFullView remove={false} />
        <Menu />
        <Container>
          <ShopNav />
          <ShopingCart />
        </Container>{" "}
        <Footer />
      </ReduxContainer>
    </>
  );
}
