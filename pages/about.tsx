import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import AboutMe from "../components/about/aboutme";
import { Container } from "../components/container";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function About() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <AboutMe />
        </Container>{" "}
        <Footer />
      </ReduxContainer>
    </>
  );
}
