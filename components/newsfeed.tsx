import "../src/app/globals.css";

import React, { useRef, useState } from "react";

export default function Newsletter() {
  const [newsFeedSignedUp, setNewsFeedSignedUp] = useState(false);
  const refName = useRef();
  const refSurname = useRef();
  const refEmail = useRef();

  async function addNewsfeedUser() {
    const api = "http://localhost:3000/api/getnewsfeed";
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: refName.current.value.trim(),
        surname: refSurname.current.value.trim(),
        email: refEmail.current.value.trim(),
      }),
    };
    console.log("coś");
    // const response = await fetch(api, postData);
    // const res = await response.json();
    setNewsFeedSignedUp(true);
  }
  if (!newsFeedSignedUp) {
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
                  ref={refName}
                  type="text"
                  name=""
                  id=""
                  className="border-so border border-black"
                />
                <h2>Surname:</h2>
                <input
                  ref={refSurname}
                  type="text"
                  name=""
                  id=""
                  className="border-so border border-black"
                />
                <h2>E-mail:</h2>
                <input
                  ref={refEmail}
                  type="text"
                  name=""
                  id=""
                  className="border-so border border-black"
                />

                <div className=" relative flex w-full justify-center">
                  <button
                    className="mb-2 mt-4 inline-block w-24 border border-black text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      addNewsfeedUser();
                    }}
                    type="submit"
                  >
                    Sign up!
                  </button>
                </div>
              </form>
            </div>{" "}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="mt-2 overflow-hidden rounded-md bg-neutral-50 p-4">
            <h1 className="py-px pl-2 text-center font-bold">
              Właśnie zapisałeś się na Newsletter. Gratulacje!
            </h1>
          </div>
        </div>
      </>
    );
  }
}
