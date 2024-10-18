import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
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
