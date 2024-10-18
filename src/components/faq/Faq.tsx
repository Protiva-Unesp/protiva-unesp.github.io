import { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import styles from './Faq.module.css'; 

const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'O que é a competição de lógica e programação?',
            answer: 'É uma competição onde você pode testar suas habilidades em lógica e programação, resolver problemas desafiadores e competir com outros participantes.',
            open: false
        },
        {
            question: 'Quem pode participar?',
            answer: 'Qualquer pessoa interessada em lógica e programação, desde iniciantes até programadores experientes, pode participar.',
            open: false
        },
        {
            question: 'Como faço para me inscrever?',
            answer: 'Você pode se inscrever através do nosso site, preenchendo o formulário de inscrição e seguindo as instruções fornecidas.',
            open: false
        },
        {
            question: 'Quais são os prêmios?',
            answer: 'Os prêmios variam de acordo com a categoria e o nível da competição. Detalhes específicos podem ser encontrados na página de prêmios do site.',
            open: false
        }
    ]);

    const toggleFAQ = (index: number) => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <section className={styles.contact} id="connect">
            <div className={styles.container}>
                <div className={styles.contactContainer}>
                    <div className={styles.imgCol}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? 
                                    "animate__animated animate__zoomIn" : ""} 
                                src={contactImg} alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </div>
                    <div className={styles.faqSection}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 
                                    "animate__animated animate__fadeIn" : ""}>
                                    <h2 className={styles.h2}>
                                        Perguntas Frequentes</h2>
                                    <div className={styles['faq-list']}>
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className={
                                                    `${styles['faq-item']} 
                                                     ${faq.open ? styles.open : 
                                                ""}`}
                                                onClick={() => toggleFAQ(index)}
                                            >
                                                <div className={
                                                    styles['faq-question']}>
                                                    {faq.question}
                                                </div>
                                                <div className={
                                                    styles['faq-answer']}>
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
