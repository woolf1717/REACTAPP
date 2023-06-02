import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import Empty from "../components/empty";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function SingIn() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <h1>Sign In</h1>
          <Empty /> <Footer />
        </Container>
      </ReduxContainer>
    </>
  );
}
