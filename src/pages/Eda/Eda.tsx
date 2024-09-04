import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
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
