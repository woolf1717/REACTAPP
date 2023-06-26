import "../../src/app/globals.css";

import ReduxContainer from "../../components/redux/reduxComponents/reduxcontainer";

import ShopingCart from "../../components/shop/shopingcart";
import { Container } from "../../components/container";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import ShopNav from "../../components/shop/shopnav";
import ItemFullView from "../../components/shop/shopcomponents/itemfullview";
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
