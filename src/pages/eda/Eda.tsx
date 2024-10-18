import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import edaData from "../../data/edaData";
import styles from "./Eda.module.css";

function Eda() {
    return (
        <div>
            <Navbar />
            <h1 className={styles.heading}>Estruturas de Dados e Algoritmos</h1>
            <p className={styles.paragraph}>Tópicos sobre ED & A</p>
            <CardsContainer cards={edaData}/>
            <Footer />
        </div>
    );
}

export default Eda;
