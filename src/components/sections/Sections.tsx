import styles from "./Sections.module.css";
import { Link } from "react-router-dom";

function Section() {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionWelcome}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3>Sobre a Protiva</h3>
                        <p>Vídeos produzidos por alunos e professores da 
                        Unesp sobre Programação Competitiva, com conteúdos 
                        voltados para treinamento para competições como a 
                        Olimpíada Brasileira de Informática, a Maratona SBC de 
                        Programação, entre outras.</p>
                    </div>
                    <div className={styles.imgContent}>
                        <h3>Imagem Protiva</h3>                 
                        <h3>Imagem DCO (Dep. Computação)</h3>                 
                        <h3>Imagem Unesp</h3>                 
                    </div>
                </div>
            </div>
            <div className={styles.sectionEda}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3>Estruturas de Dados e Algoritmos</h3>
                        <p>Teste texto Teste texto</p>
                        <Link to="/estude/eda">
                            <button>Aprender ED&A</button>
                        </Link>
                    </div>
                    <div className={styles.imgContent}>
                        <h3>Imagem Grafos</h3>                 
                    </div>
                </div>
            </div>
            <div className={styles.sectionObi}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3>OBI - Respostas comentadas</h3>
                        <p>Teste texto Teste texto</p>
                        <Link to="/estude/obi">
                            <button>Estudar Respostas</button>
                        </Link>
                    </div>
                    <div className={styles.imgContent}>
                        <h3>Imagem OBI</h3>                 
                    </div>
                </div>
            </div>
            <div className={styles.sectionIntro}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3>Introdução à Programação</h3>
                        <p>Teste texto Teste texto</p>
                        <Link to="/estude/intro">
                            <button>Iniciar</button>
                        </Link>
                    </div>
                    <div className={styles.imgContent}>
                        <h3>Imagem Introdução</h3>                 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
