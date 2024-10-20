import { useState, useEffect } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 10);
    const [isBlinking, setIsBlinking] = useState(false); 
    const toRotate = ["PROgramação CompetiTIVA"];
    const delayBeforeDelete = 6000; 

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(30); 
        } else {
            setDelta(80); 
        }

        if (!isDeleting && updatedText === fullText) {
            setIsBlinking(true);
            setDelta(delayBeforeDelete); 
            setIsDeleting(true); 
        } else if (isDeleting && updatedText === '') {
            setIsBlinking(true);
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(1000);
        } else {
            setIsBlinking(false);
        } 
    };


    return (
        <section className={styles.banner} id="home">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className= "animate__animated animate__fadeIn">
                        <h1>Protiva:<br /> 
                            <span className={styles['txt-rotate']}>
                                <span className={`${styles.wrap} ${isBlinking ? styles.blink : 
                                styles.solid}`}>{text}</span>
                            </span>
                        </h1>
                    </div>
                    <p>Aprenda sobre estruturas de dados e algoritmos para Programação Competitiva!</p>
                </div>
                <div className={styles.squareContainer}>
                    <div className={`${styles.squareFig} ${styles.squareFig1}`}
                    onClick={() => document.getElementById('sectionWelcome')
                        ?.scrollIntoView({ behavior: 'smooth'})}></div>
                    <div className={`${styles.squareFig} ${styles.squareFig2}`}
                    onClick={() => document.getElementById('sectionEda')
                        ?.scrollIntoView({ behavior: 'smooth'})}></div>
                    <div className={`${styles.squareFig} ${styles.squareFig3}`}
                    onClick={() => document.getElementById('sectionObi')
                        ?.scrollIntoView({ behavior: 'smooth'})}></div>
                    <div className={`${styles.squareFig} ${styles.squareFig4}`}
                    onClick={() => document.getElementById('sectionIntro')
                        ?.scrollIntoView({ behavior: 'smooth'})}></div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
