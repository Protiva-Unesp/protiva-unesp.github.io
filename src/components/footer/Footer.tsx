import React from 'react';
import styles from './Footer.module.css';
//import navIcon1 from "../../assets/img/nav-icon1.svg";
//import navIcon2 from "../../assets/img/nav-icon2.svg";
//import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {/*<div className={styles.socialRow}>
                <div className={styles.socialIcon}> 
                    <a href="https://www.youtube.com/@protiva_unesp">
                        <img src={navIcon3} alt="Icon" /></a>
                    <a href="https://www.instagram.com/protiva_unesp">
                        <img src={navIcon1} alt="Icon" /></a>
                    <a href="https://www.facebook.com/protivaunesp">
                        <img src={navIcon2} alt="Icon" /></a>
                </div>
            </div>*/}
            <div className={styles['footer-row']}>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>FUNDAÇÕES</p>
                    <ul>
                        <li><a href="https://www.editoraunesp.com.br/">Editora Unesp</a></li>
                        <li><a href="https://www.fundunesp.org.br/">Fundunesp</a></li>
                        <li><a href="https://www.vunesp.com.br/">Fundação Vunesp</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>GOVERNO</p>
                    <ul>
                        <li><a href="https://www.saopaulo.sp.gov.br/">Governo de São Paulo</a></li>
                        <li><a href="https://www.cruesp.sp.gov.br/">Conselhos de Reitores</a></li>
                        <li><a href="https://unesp.br/transparencia/">Transparência Unesp</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>SISTEMAS</p>
                    <ul>
                        <li><a href="https://sistemas.unesp.br/">Sistemas Online</a></li>
                        <li><a href="https://www2.unesp.br/eduroam">EDUROAM</a></li>
                        <li><a href="https://www2.unesp.br/ai/grupos-de-trabalho/redes-de-computadores/conteudos/videoconferencia/">Videoconferência</a></li>
                        <li><a href="https://www2.unesp.br/vpn">VPN</a></li>
                        <li><a href="https://email.unesp.br/">Webmail</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>SAÚDE</p>
                    <ul>
                        <li><a href="https://www.unesp.br/unespsaude/">Unesp Saúde</a></li>
                        <li><a href="https://www.ecaresentinela.com.br/">e-Care Sentinela</a></li>
                        <li><a href="https://www.unesp.br/numis">NUMIS</a></li>
                    </ul>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-title']}>INFORMAÇÕES</p>
                    <ul>
                        <li><a href="https://www2.unesp.br/secgeral/manuais/legislacao-unesp/">Legislação Unesp</a></li>
                        <li><a href="https://www2.unesp.br/secgeral/diplomas/revalidacao/">Revalidação de Diplomas</a></li>
                        <li><a href="https://www2.unesp.br/secgeral/diplomas/reconhecimento/">Reconhecimento de Diplomas</a></li>
                        <li><a href="#">Localização</a></li>
                        <li><a href="https://www.unesp.br/ouvidoria">Ouvidoria</a></li>
                        <li><a href="https://www2.unesp.br/politica-de-uso">Políticas de Uso</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles['footer-copy']}>
                <p>2024 Protiva</p>
            </div>
        </footer>
    );
};

export default Footer;
