import React from 'react';
import styles from './Footer.module.css';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-row']}>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>FUNDAÇÕES</p>
                    <ul>
                        <li><a href="#">Editora Unesp</a></li>
                        <li><a href="#">Fundunesp</a></li>
                        <li><a href="#">Fundação Vunesp</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>GOVERNO</p>
                    <ul>
                        <li><a href="#">Governo de São Paulo</a></li>
                        <li><a href="#">Conselhos de Reitores</a></li>
                        <li><a href="#">Transparência Unesp</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>SISTEMAS</p>
                    <ul>
                        <li><a href="#">Sistemas Online</a></li>
                        <li><a href="#">EDUROAM</a></li>
                        <li><a href="#">Videoconferência</a></li>
                        <li><a href="#">VPN</a></li>
                        <li><a href="#">Webmail</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>SAÚDE</p>
                    <ul>
                        <li><a href="#">Unesp Saúde</a></li>
                        <li><a href="#">e-Care Sentinela</a></li>
                        <li><a href="#">NUMIS</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>INFORMAÇÕES</p>
                    <ul>
                        <li><a href="#">Legislação Unesp</a></li>
                        <li><a href="#">Revalidação de Diplomas</a></li>
                        <li><a href="#">Reconhecimento de Diplomas</a></li>
                        <li><a href="#">Localização</a></li>
                        <li><a href="#">Ouvidoria</a></li>
                        <li><a href="#">Políticas de Uso</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.socialRow}>
                <div className={styles.socialIcon}> 
                    <a href="https://www.youtube.com/@protiva_unesp"><img src={navIcon3} alt="Icon" /></a>
                    <a href="https://www.instagram.com/protiva_unesp"><img src={navIcon1} alt="Icon" /></a>
                    <a href="https://www.facebook.com/protivaunesp"><img src={navIcon2} alt="Icon" /></a>
                </div>
            </div>
            <div className={styles['footer-copy']}>
                <p>2024 Protiva</p>
            </div>
        </footer>
    );
};

export default Footer;
