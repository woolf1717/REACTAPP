import "../src/app/globals.css";

import React from "react";

import Link from "next/link";

export default function Menu() {
  return (
    <nav className="w-screen h-6">
      <div className="float-right">
        <Link href={"/"} className="mx-4">
          Start
        </Link>
        <Link href={"/blog"} className="mx-4">
          Blog
        </Link>
        <Link href={"/about"} className="mx-4">
          O nas
        </Link>
        <Link href={"/contact"} className="mx-4">
          Kontakt
        </Link>
        <Link href={"/login"} className="mx-4">
          Login
        </Link>
      </div>
    </nav>
  );
}
