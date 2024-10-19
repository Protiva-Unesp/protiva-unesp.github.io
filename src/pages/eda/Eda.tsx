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
            <p className={styles.paragraph}>
            Tópicos sobre EDA 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus dictum tempor diam, quis consectetur mi pulvinar vel. 
            Integer id felis diam. Quisque aliquet, justo quis scelerisque 
            viverra, nunc justo cursus tortor, vel ultricies urna eros in elit.
            </p>
            <CardsContainer cards={edaData}/>
            <Footer />
        </div>
    );
}

export default Eda;
