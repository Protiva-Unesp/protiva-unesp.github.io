// import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Faq from "../../components/faq/Faq";
//import Projects from "../../components/projects/Projects";
import Carousel from "../../components/carousel/Carousel";
import Sections from "../../components/sections/Sections";
import Socials from "../../components/socials/Socials";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            {/* <Content />*/}
            <Carousel />
            {/*<Projects />*/}
            <Sections />
            <Socials />
            <Faq />
            <Footer />
        </div>
    );
}

export default Home;
