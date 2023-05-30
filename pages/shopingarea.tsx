import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";
import ShopBlank from "../components/shop/shopblank";
import ShopNav from "../components/shop/shopnav";
import { Container } from "../components/container";
import ShopPosterOne from "../components/shop/shopposterone";
import ShopPosterTwo from "../components/shop/shoppostertwo";
import ShopGalery from "../components/shop/shopgalery";
import Footer from "../components/footer";
import ShopTopSale from "../components/shop/shoptopsale";
import ShopNewOffers from "../components/shop/shopnewoffers";
import ShopGaleryWoman from "../components/shop/shopgalerywoman";

export default function Shop() {
  return (
    <>
      <Menu />
      <Container>
        <div className="h-full">
          <div className="grid grid-cols-2 grid-rows-8 gap-3 relative h-full">
            <ShopNav />
            <ShopPosterOne />
            <ShopTopSale />
            <ShopGalery />
            <ShopNewOffers />
            <ShopPosterTwo />
            <ShopGaleryWoman />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
