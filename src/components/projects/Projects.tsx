import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import styles from './Projects.module.css';
import CardsContainer from "../CardsContainer/CardsContainer";
import projectsData from "../../data/projectsData";

export const Projects = () => {
  return (
    <section className={styles.project} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className={styles.projectTitle}>Aulas e Desafios</h2>
                  <p className={styles.projectDescription}>Acreditamos no poder da prática para aprimorar habilidades de programação e lógica. Aqui vamos te proporcionar uma experiência prática e envolvente, te oferecendo aulas e desafios para que você possa se testar!</p>
                  <Row className="d-flex justify-content-between">
                    <CardsContainer cards={projectsData} />
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className={styles['background-image-right']} src={colorSharp2} alt="Background" />
    </section>
  );
};
