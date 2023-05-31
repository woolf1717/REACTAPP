import "../../src/app/globals.css";

import React from "react";
import { useState, useEffect } from "react";

export default function LoginForm() {
  const [loginInput, setLoginInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleLogIn = (e: any) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setLoginInput("");
    setPasswordInput("");
  };

  useEffect(() => {
    setLoggedIn(JSON.parse(window.localStorage.getItem("loggedIn")!));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("loggedIn", new Boolean(loggedIn).toString());
  }, [loggedIn]);

  useEffect(() => {
    setLoginInput(window.localStorage.getItem("loginInput")!);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("loginInput", loginInput);
  }, [loginInput]);

  useEffect(() => {
    setPasswordInput(window.localStorage.getItem("passwordInput")!);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("passwordInput", passwordInput);
  }, [passwordInput]);

  let actualForm;

  if (loggedIn) {
    actualForm = (
      <>
        <div className="relative bg-blue-950 mt-3 p-2 flex flex-col content-between text-sm w-52 z-10 text-amber-50 ">
          <p className="text-center">Hello user, {loginInput}!!!</p>
          <p className="text-center">
            In case you forgot your password is: {passwordInput} ;D
          </p>
          <button
            className="border border-amber-50 mt-2 mx-10 text-xs"
            onClick={handleLogOut}
            type="button"
          >
            Log out
          </button>
        </div>
      </>
    );
  } else {
    actualForm = (
      <>
        <form
          onSubmit={handleLogIn}
          className="relative bg-blue-950 mt-3 p-2 flex flex-col content-between text-sm text-amber-50 items-center"
        >
          <label className="py-0.5">Login/Email:</label>
          <input
            onChange={(e) => setLoginInput(e.target.value)}
            className="h-4 w-36 text-black text-xs pl-0.5"
            type="text"
            pattern=".{8,}"
            required
          />
          <label className="py-0.5">Password:</label>
          <input
            onChange={(e) => setPasswordInput(e.target.value)}
            className="h-4 w-36 text-black text-xs pl-0.5"
            type="password"
            name="fname"
            pattern=".{8,}"
            required
          />
          <button
            className="border border-amber-50 mt-2 mx-10 text-xs w-16 h-6"
            type="submit"
          >
            Log in
          </button>
        </form>
      </>
    );
  }

  return <>{actualForm}</>;
}
