import "../../src/app/globals.css";

import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="overflow-hidden rounded-md bg-neutral-50 p-4">
        <h1 className="font-bold">
          If you want to contact me feel free to use this form, or email me
          office@devyourweb.pl.{" "}
        </h1>
        <form>
          <p>
            <label>Imię:</label>
            <br />
            <input
              type="text"
              className="w-full border-2 border-neutral-500/25"
            />
          </p>
          <p>
            <label>Nazwisko:</label>
            <br />
            <input
              type="text"
              className="w-full border-2 border-neutral-500/25"
            />
          </p>
          <p>
            <label>Temat:</label>
            <br />
            <input
              type="text"
              className="w-full border-2 border-neutral-500/25"
            />
          </p>
          <p>
            <label>Wiadomość:</label>
            <br />
            <input
              type="text"
              className="h-24 w-full border-2 border-neutral-500/25"
            />
          </p>
          <p className="">
            <button
              type="submit"
              className="relative left-2/4 h-4 -translate-x-2/4  pt-3"
            >
              <span className="border-2 border-neutral-500/25 bg-white px-2 py-px">
                {" "}
                Wyślij
              </span>
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
