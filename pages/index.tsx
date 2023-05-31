import "../src/app/globals.css";

import Menu from "../components/menu";
import { Container } from "../components/container";
import Footer from "../components/footer";

import Profile from "../components/redux/reduxComponents/Profile";
import Login from "../components/redux/reduxComponents/Login";
import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";
import ChangeColor from "../components/redux/reduxComponents/ChangeColor";

export default function Home() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <h1 className="text-2xl italic">Projekt CV.</h1>
          <p className="mb-2">
            In this project my main goal, is to prepare to work as Junior Front
            End Developer. To do so im useing Next.js framework, becaouse it is
            recomended by REACT. Im going to explore posibilities of Next.js,
            React, Redux and Tailwind, combined together. I would like to
            prepare site with posibility to log in, responvie store area with
            cart capabilities, blog page where its possible to add a post when
            logged as user. When I find a job as Frontend WebDev i will reuse
            the project to learn conecting with database.
          </p>
          <Profile />
          <Login />
          <ChangeColor />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
