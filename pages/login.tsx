import "../src/app/globals.css";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";
import Footer from "../components/footer";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

export default function Login() {
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
