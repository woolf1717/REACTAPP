import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Newsletter from "../components/newsfeed";
import LoginForm from "../components/menucomponents/loginForm";

export default function Login() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <LoginForm />
          <Newsletter />
        </Container>{" "}
        <Footer />
      </ReduxContainer>
    </>
  );
}
