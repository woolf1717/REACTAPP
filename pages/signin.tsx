import "../src/app/globals.css";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";
import Footer from "../components/footer";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

export default function SingIn() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <h1>Sign In</h1>
          <Empty />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
