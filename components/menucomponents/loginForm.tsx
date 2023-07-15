import "../../src/app/globals.css";

import React, { FormEvent } from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector} from "react-redux";
import {  login, logout } from "../redux/reduxFeatures/user";

export default function LoginForm() {
  const [loginInput, setLoginInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const [data, setData] = useState<any>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getusers";
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" }
      }
      const response = await fetch(api, postData);
      const res = await response.json();
      setData(res.products);
    }
    fetchData();
  }, []);


const loginHandler = (e:FormEvent) => {
  e.preventDefault()
  let user: any = checkLogin() 
  if (user !== undefined){
    let validationComplete = checkPassword(user)
    if(validationComplete === true){
    handleLogIn()
    dispatch(login(data[user]))
}else if (validationComplete === false){alert("Złe hasło")}
}else if (user === undefined){
  alert("Nie ma takego użytkownika")
}
}

const checkLogin = () => {
  for(let i = 0; i < data.length; i++){
    if(loginInput === data[i].username){
      return i
    }}}

const checkPassword = (user) => {
  if(passwordInput === data[user].password){
    return true
} else return false}

    const handleLogIn = () => {
    setLoggedIn(true);
  }


  const handleLogOut = () => {
    setLoggedIn(false);
    setLoginInput("");
    setPasswordInput("");
    dispatch(logout())
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
  let currentUser = useSelector((state:any) => state.user.value)

  if (currentUser.logged) {
    actualForm = (
      <>
        <div className="relative mt-3 flex flex-col content-between items-center bg-blue-950 p-2  text-sm  text-amber-50">
          <p className="text-center">Hello user, {currentUser.username}!!!</p>
          <p className="text-center">
            In case you forgot your password is: {currentUser.password} ;D
          </p>
          <p className="text-center">Email: {currentUser.email}</p>
          <p className="text-center">Gender: {currentUser.gender}</p>
          <p className="text-center">Birthday: {currentUser.birthday}</p>
          <p className="text-center">Birthmonth: {currentUser.birthmonth}</p>
          <p className="text-center">Birthyear: {currentUser.birthyear}</p>
          <p className="text-center">Phonenumber: {currentUser.phonenumber}</p>
          <p className="text-center">User-type: {currentUser.user_type}</p>
          <p className="text-center">Logged: {currentUser.logged ? "true" : ''}</p>
          <button
            className="mx-10 mt-2 h-6 w-16 border border-amber-50 text-xs"
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
          onSubmit={loginHandler}
          className="relative mt-3 flex flex-col content-between items-center bg-blue-950 p-2  text-sm text-amber-50"
        >
          <label className="py-0.5">Login/Email:</label>
          <input
            onChange={(e) => setLoginInput(e.target.value)}
            className="h-4 w-36 pl-0.5 text-xs text-black"
            type="text"
            pattern=".{3,}"
            required
          />
          <label className="py-0.5">Password:</label>
          <input
            onChange={(e) => setPasswordInput(e.target.value)}
            className="h-4 w-36 pl-0.5 text-xs text-black"
            type="password"
            name="fname"
            pattern=".{5,}"
            required
          />
          <button
            className="mx-10 mt-2 h-6 w-16 border border-amber-50 text-xs "
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
