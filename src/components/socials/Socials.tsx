import navIcon1 from "../../assets/img/youtube.svg";
import navIcon2 from "../../assets/img/instagram.svg";
import navIcon3 from "../../assets/img/facebook.svg";
import styles from "./Socials.module.css";

function Section() {
    return (
        <div className={styles.section}>
            <h1>NOS SIGA NAS REDES SOCIAIS!</h1>
            <p>Confira nosso canal no Youtube para mais conteúdos
            relacionados à Programação Competitiva.</p>
            <div className={styles.socialRow}>
                <div className={styles.socialIcon}> 
                    <a href="https://www.youtube.com/@protiva_unesp">
                        <img src={navIcon3} alt="Icon" /></a>
                    <a href="https://www.instagram.com/protiva_unesp">
                        <img src={navIcon1} alt="Icon" /></a>
                    <a href="https://www.facebook.com/protivaunesp">
                        <img src={navIcon2} alt="Icon" /></a>
                </div>
            </div>
        </div>
    );
};

export default Section;
