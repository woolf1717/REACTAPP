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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga
            nobis facere laudantium voluptatem officia quidem soluta repellendus
            corrupti, expedita id exercitationem quos impedit, accusantium
            facilis quae! Voluptatem, ullam dolore.
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
