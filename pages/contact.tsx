import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import ContactForm from "../components/contact/contact";
import { Container } from "../components/container";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function Contact() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <ContactForm />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
