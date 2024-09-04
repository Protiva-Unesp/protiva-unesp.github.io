import styles from './Section.module.css';

function Section() {
    return (
        <div>
            <div className={styles.section}>
                <h1>Estruturas de dados e Algoritmos</h1>
                <p className={styles.textField}>Aprenda sobre ED & A</p>
                <button>Botao teste</button>
            </div>
            <div className={styles.section}>
                <h1>OBI - Respostas comentadas</h1>
                <p className={styles.textField}>Estude as questões de provas anteriores</p>
                <button>Botao teste</button>
            </div>
            <div className={styles.section}>
                <h1>Introdução a programação</h1>
                <p className={styles.textField}>Dê seus primeiros passos na programação</p>
                <button>Botao teste</button>
            </div>
        </div>
    );
};

export default Section;
