import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import Footer from "../components/footer";
import Menu from "../components/menu";

import ItemFullView from "../components/shop/shopcomponents/itemfullview";
import ShopGalery from "../components/shop/shopgalery";
import ShopGaleryWoman from "../components/shop/shopgalerywoman";
import ShopNav from "../components/shop/shopnav";
import ShopNewOffers from "../components/shop/shopnewoffers";
import ShopPosterOne from "../components/shop/shopposterone";
import ShopPosterTwo from "../components/shop/shoppostertwo";
import ShopTopSale from "../components/shop/shoptopsale";

export default function Shop() {
  return (
    <>
      <ReduxContainer>
        <ItemFullView remove={true} />
        <Menu />
        <Container>
          <div className="h-200vh ">
            <div className="relative grid h-full grid-cols-2 grid-rows-12 gap-2">
              <ShopNav />
              <ShopPosterOne />
              <ShopTopSale />
              <ShopGalery />
              <ShopNewOffers />
              <ShopPosterTwo />
              <ShopGaleryWoman />
            </div>
          </div>{" "}
        </Container>{" "}
        <Footer />
      </ReduxContainer>
    </>
  );
}
