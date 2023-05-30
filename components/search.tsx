import React from "react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [search, setSearch] = useState<boolean>(true);

  function handleSearchInit() {
    setSearch(false);
  }
  function handleSearchAbort() {
    setSearch(true);
  }

  let outcome;

  if (search) {
    outcome = (
      <>
        <div className="inline-block h-full" onClick={handleSearchInit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </>
    );
  } else {
    outcome = (
      <>
        <div className="">
          <div
            className="inline-block text-yellow-400 text-sm mr-1"
            onClick={handleSearchAbort}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input className="text-sm text-black rounded-3xl" type="text" />
        </div>
      </>
    );
  }
  return <>{outcome}</>;
}
