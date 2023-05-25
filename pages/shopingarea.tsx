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

export default function Shop() {
  return (
    <>
      <Menu />
      <Container>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full relative ">
          <ShopNav />
          <ShopPoster />
          <ShopBlank />
          <ShopGalery />

          <ShopBlank />
          <ShopBlank />
          <Empty />
          <Empty />
          {/* <Empty />
          <Empty />
          <Empty />
          <Empty /> */}
        </div>
      </Container>
      <Footer />
    </>
  );
}
