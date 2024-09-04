import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/banner/Banner";
import { Contact } from "../../components/contact/Contact";
import { Projects } from "../../components/projects/Projects";
import { Skills } from "../../components/skills/Skills";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
