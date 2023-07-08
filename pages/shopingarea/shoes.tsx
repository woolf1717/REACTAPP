import "../../src/app/globals.css";

import ReduxContainer from "../../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../../components/container";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import ShopNav from "../../components/shop/shopnav";

export default function Shoes() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <ShopNav />
        </Container>{" "}
        <Footer />
      </ReduxContainer>
    </>
  );
}
