import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";

export default function SingIn() {
  return (
    <>
      <Menu />
      <Container>
        <h1>Sign In</h1>
        <Empty />
      </Container>
    </>
  );
}
