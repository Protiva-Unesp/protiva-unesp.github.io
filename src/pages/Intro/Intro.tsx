import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import introData from "../../data/introData";
import styles from "./Intro.module.css";

function Intro() {
    return (
        <div>
            <Navbar />
            <h1 className={styles.heading}>Introdução a Programação</h1>
            <p className={styles.paragraph}>Introdução a programação com
            Scratch, Python, C</p>
            <CardsContainer cards={introData}/>
            <Footer />
        </div>
    );
}

export default Intro;
