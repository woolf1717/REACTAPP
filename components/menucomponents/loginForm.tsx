import "../../src/app/globals.css";

import React, { FormEvent, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/reduxFeatures/user";

export default function LoginForm() {
  const [loginInput, setLoginInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const [singUpForm, setSignUpForm] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newPasswordOne, setNewPasswordOne] = useState("");
  const [newPasswordTwo, setNewPasswordTwo] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newGender, setNewGender] = useState<string>("");
  const [newBirthDate, setNewBirthDate] = useState("");

  const [created, setCreated] = useState(false);

  const dispatch = useDispatch();

  function getCurrentTimestamp() {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const currentTime = getCurrentTimestamp();

  useEffect(() => {
    async function fetchData() {
      const api = "http://localhost:3000/api/getusers";
      const postData = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(api, postData);
      const res = await response.json();
      setData(res.products);
    }
    fetchData();
  }, []);

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    let user: any = checkLogin();
    if (user !== undefined) {
      let validationComplete = checkPassword(user);
      if (validationComplete === true) {
        handleLogIn();
        dispatch(login(data[user]));
      } else if (validationComplete === false) {
        alert("Złe hasło");
      }
    } else if (user === undefined) {
      alert("Nie ma takego użytkownika");
    }
  };

  async function addUser() {
    const api = "http://localhost:3000/api/getusers";
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: newUser,
        email: newEmail,
        password: newPasswordOne,
        phonenumber: newPhoneNumber,
        gender: newGender,
        birthyear: newBirthDate.slice(0, 4),
        birthmonth: newBirthDate.slice(5, 7),
        birthday: newBirthDate.slice(8, 10),
        user_ype: "user",
      }),
    };
    console.table(postData);

    const response = await fetch(api, postData);
    console.log(response);
    console.log("works");
    const res = await response.json();
    // if (response.message !== "success") return;
    // const newproduct = response.response.product;
    // console.log(newproduct)
    setSignUpForm(!singUpForm);
    setCreated(true);
  }

  const checkLogin = () => {
    for (let i = 0; i < data.length; i++) {
      if (loginInput === data[i].username) {
        return i;
      }
    }
  };

  const checkPassword = (user) => {
    if (passwordInput === data[user].password) {
      return true;
    } else return false;
  };

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setLoginInput("");
    setPasswordInput("");
    dispatch(logout());
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
  let currentUser = useSelector((state: any) => state.user.value);

  const runSignIn = () => {
    // console.log(singUpForm);
    setSignUpForm(!singUpForm);
  };

  if (currentUser.logged) {
    actualForm = (
      <>
        <div className="relative mt-3 flex flex-col content-between items-center bg-blue-950 p-2 text-center text-sm text-amber-50">
          <p>Hello user, {currentUser.username}!!!</p>
          <p className="">
            In case you forgot your password is: {currentUser.password} ;D
          </p>
          <p>Email: {currentUser.email}</p>
          <p>Gender: {currentUser.gender}</p>
          <p>Birthday: {currentUser.birthday}</p>
          <p>Birthmonth: {currentUser.birthmonth}</p>
          <p>Birthyear: {currentUser.birthyear}</p>
          <p>Phonenumber: {currentUser.phonenumber}</p>
          <p>User-type: {currentUser.user_type}</p>
          <p>Logged: {currentUser.logged ? "true" : ""}</p>
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
        <div className="relative mt-4 bg-blue-950 text-center text-sm text-amber-50">
          <form
            onSubmit={loginHandler}
            className="flex flex-col content-between items-center p-2 pt-4 "
          >
            <label className="py-0.5">Login/Email:</label>
            <input
              onChange={(e) => setLoginInput(e.target.value)}
              className="h-5 w-52 pl-0.5 text-xs text-black"
              type="text"
              pattern=".{3,}"
              required
            />
            <label className="py-0.5">Password:</label>
            <input
              onChange={(e) => setPasswordInput(e.target.value)}
              className="h-5 w-52 pl-0.5 text-xs text-black"
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

          <div className="flex flex-col content-between items-center p-2 pt-4">
            <p className="border-t-2 border-amber-50 pt-2">
              Don&apos;t have an accound yet?
            </p>
            {singUpForm ? (
              <button
                className="mx-10 mt-2 h-6 w-20 border border-amber-50 text-xs"
                onClick={runSignIn}
              >
                Close form
              </button>
            ) : (
              <button
                className="mx-10 mt-2 h-6 w-20 border border-amber-50 text-xs"
                onClick={runSignIn}
              >
                Sign in
              </button>
            )}
            {created ? <div>Gratuluje wygrałeś życie</div> : ""}
            {singUpForm ? (
              <form className="p-2">
                <div className="pt-2">
                  <label>Username:</label>
                  <br />
                  <input
                    onChange={(e) => setNewUser(e.target.value)}
                    type="text"
                    className="h-5 w-52 pl-0.5 text-xs text-black"
                    pattern=".{8,}"
                  ></input>
                  <br />
                </div>
                <div className="pt-2">
                  <label>Password:</label>
                  <br />
                  <input
                    onChange={(e) => setNewPasswordOne(e.target.value)}
                    type="password"
                    className="h-5 w-52 pl-0.5 text-xs text-black"
                  ></input>
                  <br />
                  <div className="pt-2">
                    <label>Repeat password:</label>
                    <br />

                    <input
                      onChange={(e) => setNewPasswordTwo(e.target.value)}
                      type="password"
                      className="h-5 w-52 pl-0.5 text-xs text-black"
                    ></input>
                    <br />
                  </div>
                  <div className="pt-2">
                    <label>Email(example@email.com):</label>
                    <br />
                  </div>

                  <input
                    onChange={(e) => setNewEmail(e.target.value)}
                    type="  "
                    className="h-5 w-52 pl-0.5 text-xs text-black"
                  ></input>
                  <br />
                  <div className="pt-2">
                    <label>Phone number:</label>
                    <br />
                  </div>

                  <input
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    type="  "
                    className="h-5 w-52 pl-0.5 text-xs text-black"
                  ></input>
                  <br />
                </div>

                <div className="pt-2">
                  <label>Gender(M/F):</label>
                  <br />
                  <div className="flex content-center justify-around">
                    <div className="flex content-center pt-2">
                      <label className="h-5 pl-2 pr-2">Male:</label>
                      <input
                        id="Male"
                        type="checkbox"
                        name="myCheckbox"
                        value="1"
                        onChange={() => {
                          if (newGender === "" || newGender === "F") {
                            setNewGender("M");
                          } else if (newGender === "M") {
                            setNewGender("");
                            newGender;
                          }
                        }}
                        className="h-5 pl-0.5 text-xs text-black"
                        checked={newGender === "M"}
                      />
                    </div>
                    <div className="flex content-center pr-2 pt-2">
                      <label className="h-5 pr-2">Female:</label>
                      <input
                        id="F"
                        type="checkbox"
                        name="myCheckbox"
                        value="2"
                        onChange={() => {
                          if (newGender === "" || newGender === "M") {
                            setNewGender("F");
                          } else if (newGender === "F") {
                            setNewGender("");
                          }
                        }}
                        className="h-5 pl-0.5 text-xs text-black"
                        checked={newGender === "F"}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <label>Birth-date(DD/MM/YEAR):</label>
                <br />
                <input
                  onChange={(e) => setNewBirthDate(e.target.value)}
                  type="date"
                  min="1940-01-01"
                  defaultValue={currentTime}
                  max={currentTime}
                  className="w-50 mt-2 h-7 pl-0.5 text-center text-xs text-black"
                ></input>
                <br />
                <button
                  className="mx-10 mt-3 h-6 w-24 border border-amber-50 text-xs"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    if (newUser.length < 5) {
                      alert(
                        "Za mało liter w użytkowniku. (musi być minimum 5)"
                      );
                    } else if (newPasswordOne === "") {
                      alert("Brak wprowadzonego hasła");
                    } else if (newPasswordOne !== newPasswordTwo) {
                      alert("Hasła się nie zgadzają");
                    } else if (!newEmail.includes("@")) {
                      alert("Mail nie ma @.");
                    } else if (newGender === "") {
                      alert("Nie wybrano płci");
                    } else if (newBirthDate === "") {
                      alert("Nie podano daty urodzenia");
                    } else {
                      addUser();
                    }
                  }}
                >
                  Create account
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }

  return <>{actualForm}</>;
}
