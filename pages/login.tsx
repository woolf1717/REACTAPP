import "../src/app/globals.css";

import Menu from "../components/menu";
import Empty from "../components/empty";
import { Container } from "../components/container";
import Footer from "../components/footer";

export default function Login() {
  return (
    <>
      <Menu />
      <Container>
        <Empty />
      </Container>
      <Footer />
    </>
  );
}
