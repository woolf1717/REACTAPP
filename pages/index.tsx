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
          <h1 className="align-center text-center text-2xl italic">
            Projekt CV.
          </h1>
          <p className="mb-2 pt-2 text-center">
            In this project, my main goal is to prepare to work as a Junior
            Front-End Developer. To do so, I&apos;m using the Next.js framework
            because it is recommended by React. I am going to explore the
            possibilities of Next.js, React, Redux, and Tailwind combined
            together. I would like to prepare a site with the possibility to log
            in, a responsive store area with cart capabilities, and a blog page
            where it&apos;s possible to add a post when logged in as a user.
            When I find a job as a Frontend Web Developer, I will reuse the
            project to learn connecting with a database.
          </p>
          <Profile />
          <Login />
          <ChangeColor /> <Footer />
        </Container>
      </ReduxContainer>
    </>
  );
}
