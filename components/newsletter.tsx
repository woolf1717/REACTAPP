import "../src/app/globals.css";

import React from "react";

export default function Newsletter() {
  return (
    <>
      <div>
        <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-2">
          <h1 className="py-px pl-2 font-bold">Newsletter:</h1>
          <p className="px-2">
            If you are looking forward to read my next article, feel free to
            join free newsfeed.
          </p>
          <div className="flex flex-col items-center">
            <form action="submit" className="flex flex-col">
              <h2>Name:</h2>
              <input
                type="text"
                name=""
                id=""
                className="border-so border border-black"
              />
              <h2>Surname:</h2>
              <input
                type="text"
                name=""
                id=""
                className="border-so border border-black"
              />
              <h2>E-mail:</h2>
              <input
                type="text"
                name=""
                id=""
                className="border-so border border-black"
              />

              <div className=" relative flex w-full justify-center">
                <div className="mb-2 mt-4 inline-block w-24 border border-black text-center">
                  Sign up!
                </div>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
