import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";
import Footer from "../components/footer";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

export default function Blog() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          {/* <h1>Blog</h1> */}
          <Empty />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
