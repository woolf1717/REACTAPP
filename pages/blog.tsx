import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import Empty from "../components/empty";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function Blog() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          {/* <h1>Blog</h1> */}
          <Empty />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
