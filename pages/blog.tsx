import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import BlogIntro from "../components/blog/blogintro";
import BlogPost from "../components/blog/blogpost";
import Footer from "../components/footer";
import Menu from "../components/menu";
import AboutMin from "../components/about/aboutMin";

export default function Blog() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <BlogIntro />
          <BlogPost />
          <BlogPost />
          <AboutMin /> <Footer />
        </Container>
      </ReduxContainer>
    </>
  );
}
