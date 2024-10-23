import styles from "./Sections.module.css";
import { Link } from "react-router-dom";
import protiva from "../../assets/img/logo_bgwhite.png";
import dco from "../../assets/img/logo_dco.png";
import unesp from "../../assets/img/logo_unesp.svg";
import graph from "../../assets/img/img_grap.png"
import obi from "../../assets/img/logo_obi.svg"
import intro from "../../assets/img/logo_program.svg"

function Section() {
    return (
        <div className={styles.sectionContainer}>
            <div id="sectionWelcome" className={styles.sectionWelcome}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3>Sobre a Protiva</h3>
                        <p>Queremos que você brilhe nas competições de programação! 
                            Nosso projeto visa estimular e capacitar alunos, 
                            oferecendo vídeos e outros materiais para 
                            te preparar para a OBI, Maratona SBC e mais. 
                            Com nosso novo site, o aprendizado ficou 
                            ainda mais completo!</p>
                    </div>
                    <div className={styles.imgContentPartners}>
                        <img src={protiva} alt="Protiva" />                 
                        <img style={{ filter: 'saturate(5)'}} 
                            src={dco} alt="DCo" />
                        <img src={unesp} alt="Unesp" />                
                    </div>
                </div>
            </div>
            <div className={styles.sectionEda}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3 id="sectionEda">Estruturas de Dados e Algoritmos</h3>
                        <p>As estruturas de dados são ferramentas essenciais para 
                            organizar os dados de forma eficiente, otimizar algoritmos 
                            e desenvolver soluções mais elegantes para problemas complexos.
                            Aqui você vai entender quais são as estruturas de dados existentes,
                            qual situação usar cada tipo de estrutura, suas abordagens e aplicações.</p>
                        <Link to="/estude/eda">
                            <button>Aprender ED&A</button>
                        </Link>
                    </div>
                    <div className={styles.imgContent}>
                        <img src={graph} alt="grafo" />
                    </div>
                </div>
            </div>
            <div className={styles.sectionObi}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3 id="sectionObi">OBI - Respostas comentadas</h3>
                        <p>A Olimpíada Brasileira de Informática (OBI) é uma competição nacional 
                            que estimula o raciocínio lógico e a habilidade em programação. 
                            Sabemos que entender a solução de um problema é essencial para aprimorar suas habilidades. 
                            Por isso, disponibilizamos resoluções de questões anteriores da OBI.</p>
                        <Link to="/estude/obi">
                            <button>Estudar Respostas</button>
                        </Link>
                    </div>
                    <div className={styles.imgContent}>
                        <img src={obi} alt="grafo" />                
                    </div>
                </div>
            </div>
            <div className={styles.sectionIntro}>
                <div className={styles.sectionContent}>
                    <div className={styles.textContent}>
                        <h3 id="sectionIntro">Introdução à Programação</h3>
                        <p>Aqui você dá seus primeiros passos para se tornar um programador e 
                            solucionar problemas por meio de software. Você desenvolverá a 
                            habilidade de criar algoritmos simples e entenderá como 
                            transformar ideias em código.</p>
                        <Link to="/estude/intro">
                            <button>Iniciar</button>
                        </Link>
                    </div>
                    <div className={styles.imgContent}>
                        <img
                            src={intro}
                            alt="programação"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
