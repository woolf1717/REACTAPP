import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import Empty from "../components/empty";
import Footer from "../components/footer";
import Menu from "../components/menu";
import LoginForm from "../components/menucomponents/loginForm";

export default function Login() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          {/* <Empty /> */}
          <LoginForm />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
