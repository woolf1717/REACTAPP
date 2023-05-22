import "../src/app/globals.css";

import Link from "next/link";

import Menu from "../components/menu";
import Empty from "../components/empty";

export default function Home() {
  return (
    <>
      <Menu />
      <h1>About</h1>
      <Empty />
    </>
  );
}
