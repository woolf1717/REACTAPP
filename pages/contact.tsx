import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Menu />
      <Container>
        <h1>Contact</h1>
        <Empty />
      </Container>
      <Footer />
    </>
  );
}
