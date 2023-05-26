import "../../../src/app/globals.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Rateing({ stars }: any) {
  const fullStar = (
    <FontAwesomeIcon icon={icon({ name: "star", style: "solid" })} />
  );
  const halfStar = (
    <FontAwesomeIcon
      icon={icon({ name: "star-half-stroke", style: "solid" })}
    />
  );
  const emptyStar = (
    <FontAwesomeIcon icon={icon({ name: "star", style: "regular" })} />
  );

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    2.4;
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? fullStar : stars >= number ? halfStar : emptyStar}
      </span>
    );
  });

  return <div>{ratingStar}</div>;
}
