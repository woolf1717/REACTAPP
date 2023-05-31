import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import Empty from "../components/empty";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function About() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <Empty />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
