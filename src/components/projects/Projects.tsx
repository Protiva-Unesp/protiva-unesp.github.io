import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import styles from './Projects.module.css';
import CardsContainer from "../cardsContainer/CardsContainer";
import projectsData from "../../data/projectsData";

const Projects = () => {

    return (
        <section className={styles.project} id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 
                                    "animate__animated animate__fadeIn" : 
                                    ""}>
                                    <h2 className={styles.projectTitle}>
                                    Estude</h2>
                                    <p className={styles.projectDescription}>
                                    Aprenda sobre estruturas de dados e 
                                    algoritmos, respostas comentadas de 
                                    competições de programação ou dê o passo 
                                    inicial na programação com introdução à 
                                    programação!</p>
                                    <Row className=
                                        "d-flex justify-content-between">
                                        <CardsContainer cards={projectsData} />
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
          <img className={styles['background-image-right']} src={colorSharp2} 
          alt="Background" />
        </section>
    );
};

export default Projects;
