import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";
import Footer from "../components/footer";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

export default function About() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <Empty />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
