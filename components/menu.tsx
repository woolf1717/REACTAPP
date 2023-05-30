import "../src/app/globals.css";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

import Search from "./search";
import LoginForm from "./menucomponents/loginForm";

import logo from "../src/pictures/logo/logo2.png";

import TopMenu from "./menucomponents/topmenu";
import BottomMenu from "./menucomponents/bottommenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <nav className=" w-screen bg-blue-950 overflow-hidden text-lg">
      <TopMenu />
      {/* <BottomMenu /> */}
    </nav>
  );
}
