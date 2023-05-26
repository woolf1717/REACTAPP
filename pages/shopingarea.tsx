import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";
import ShopBlank from "../components/shop/shopblank";
import ShopNav from "../components/shop/shopnav";
import { Container } from "../components/container";
import ShopPoster from "../components/shop/shopposter";
import ShopGalery from "../components/shop/shopgalery";
import Footer from "../components/footer";
import ShopTopSale from "../components/shop/shoptopsale";
import ShopNewOffers from "../components/shop/shopnewoffers";

export default function Shop() {
  return (
    <>
      <Menu />
      <Container>
        <div className="h-full">
          <div className="grid grid-cols-4 grid-rows-8 gap-3 relative h-full">
            <ShopNav />
            <ShopPoster />
            <ShopTopSale />
            <ShopGalery />
            <ShopNewOffers />
            <ShopBlank />
            <ShopBlank />
            <ShopBlank />
            <ShopBlank />
            <ShopBlank />
            <ShopBlank />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
