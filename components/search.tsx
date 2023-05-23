import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <>
      <div className="inline-block">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </>
  );
}
