import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import { Container } from "../components/container";
import BlogIntro from "../components/blog/blogintro";
import BlogArticlesSection from "../components/blog/blogarticlessection";
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
          <BlogArticlesSection />
          <AboutMin /> <Footer />
        </Container>
      </ReduxContainer>
    </>
  );
}
