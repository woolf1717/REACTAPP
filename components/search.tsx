import React from "react";
import { useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({ search }: any) {
  let outcome;

  if (!search) {
    outcome = <></>;
  } else {
    outcome = (
      <>
        {" "}
        <div className="fixed z-10 h-full w-full bg-blue-950 pt-14 text-3xl opacity-90">
          <div className="text-center">
            <div className="z-20 mr-1 inline-block text-sm ">Szukaj:</div>
            <input className="rounded-3xl text-sm text-black" type="text" />
            <div> Tu umieszczę tablicę wyników :P</div>
          </div>
        </div>
      </>
    );
  }
  return <>{outcome}</>;
}
