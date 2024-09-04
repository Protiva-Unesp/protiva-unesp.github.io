import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import obiData from "../../data/obiData";
import styles from "./Obi.module.css";

function Obi() {
    return (
        <div>
            <Navbar />
            <h1 className={styles.heading}>OBI - Respostas comentadas</h1>
            <p className={styles.paragraph}>Respostas comentadas da Olimpíada
            Brasileira de Informática</p>
            <CardsContainer cards={obiData}/>
            <Footer />
        </div>
    );
}

export default Obi;
