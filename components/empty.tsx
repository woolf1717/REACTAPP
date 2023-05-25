import "../src/app/globals.css";

import React from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Empty() {
  return (
    <>
      <picture className="bg-neutral-50 p-4 overflow-hidden rounded-md">
        <h1>{user.name}</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          laudantium eveniet distinctio at deserunt, vel voluptas aperiam sint
          quidem delectus molestiae voluptates quam quas aspernatur, deleniti
          quia esse, neque officiis.
        </p>
      </picture>
    </>
  );
}
