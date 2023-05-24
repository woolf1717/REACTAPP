import "../src/app/globals.css";

import React from "react";
import { useState } from "react";

export default function LoginForm() {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <form className="bg-blue-950 mt-9 p-2 flex flex-col content-between text-sm">
        <label className="py-0.5">Login/Email:</label>
        <input
          onChange={(e) => setLoginInput(e.target.value)}
          className="h-4 w-36 text-black text-xs pl-0.5"
          type="text"
        />
        <label className="py-0.5">Password:</label>
        <input
          onChange={(e) => setPasswordInput(e.target.value)}
          className="h-4 w-36 text-black text-xs pl-0.5"
          type="password"
          name="fname"
        />
        <input
          className="border border-amber-50 mt-2 mx-10 text-xs"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </>
  );
}
