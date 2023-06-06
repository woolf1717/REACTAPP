import "../src/app/globals.css";

import Image from "next/image";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../src/pictures/logo.png";

export default function Footer() {
  return (
    <>
      <div className="absolute mt-10 w-full  pb-2 pl-6 pr-6 text-center">
        <div className="flex flex-col justify-around  border-t border-amber-300 pt-2">
          <div>
            <h1>MySocials</h1>
            <ul>
              <a
                href="https://www.facebook.com/bartosz.stpiczynski.9/"
                target=" blank"
              >
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                  One
                </li>{" "}
              </a>
              <li>
                {" "}
                <a
                  href="https://www.instagram.com/bartoszstpiczynski/"
                  target=" blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  Two
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/bartosz-stpiczynski-947400244/"
                  target=" blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  Three
                </a>
              </li>
              <li>
                {" "}
                <a href="https://github.com/woolf1717" target=" blank">
                  <FontAwesomeIcon icon={faGithub} />
                  Four
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.devyourweb.pl/" target=" blank">
                  {" "}
                  <Image
                    src={logo}
                    quality={100}
                    alt="logo"
                    height={24}
                    width={24}
                    className="inline-block"
                  />
                  Five
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
