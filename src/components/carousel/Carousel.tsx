import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.css';
import meter from "../../assets/img/test.svg";

const Carousel2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={styles.skill} id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`${styles['skill-bx']} wow zoomIn`}>
                        <h2>Aprenda</h2>
                        <p>Estruturas de dados, algoritmos, exercícios 
                        comentados e muito mais!</p>
                        <Carousel responsive={responsive} infinite={true} 
                        className={`${styles['skill-slider']} 
                            owl-carousel owl-theme`}>
                            <div className={styles.item}>
                                <img src={meter} alt="Estruturas de Dados" />
                                <h5>Estruturas de Dados</h5>
                            </div>
                            <div className={styles.item}>
                                <img src={meter} alt="Algoritmos" />
                                <h5>Algoritmos</h5>
                            </div>
                            <div className={styles.item}>
                                <img src={meter} alt="Olimpíada Brasileira de 
                                Informática" />
                                <h5>Olimpíada Brasileira de Informática</h5>
                            </div>
                            <div className={styles.item}>
                                <img src={meter} alt="Maratona SBC de 
                                Programação" />
                                <h5>Maratona SBC de Programação</h5>
                            </div>
                            <div className={styles.item}>
                                <img src={meter} alt="Introdução a 
                                Programação" />
                                <h5>Introdução a Programação</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carousel2;
