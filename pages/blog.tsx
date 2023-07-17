import "../src/app/globals.css";

import ReduxContainer from "../components/redux/reduxComponents/reduxcontainer";

import AboutMin from "../components/about/aboutMin";
import BlogArticlesSection from "../components/blog/blogarticlessection";
import BlogIntro from "../components/blog/blogintro";
import BlogAddArticle from "../components/blog/blogaddarticle";
import { Container } from "../components/container";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function Blog() {
  return (
    <>
      <ReduxContainer>
        <Menu />
        <Container>
          <BlogIntro />
          <BlogArticlesSection />
          <BlogAddArticle />
          <AboutMin />
        </Container>
        <Footer />
      </ReduxContainer>
    </>
  );
}
