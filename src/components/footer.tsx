import React from 'react';
import * as styles from './footer.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerRow}>
                <div className={styles.footerColumn}>
                    <h2>FUNDAÇÕES</h2>
                    <ul>
                        <li><a href="https://www.editoraunesp.com.br/">Editora Unesp</a></li>
                        <li><a href="https://www.fundunesp.org.br/">Fundunesp</a></li>
                        <li><a href="https://www.vunesp.com.br/">Fundação Vunesp</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h2>GOVERNO</h2>
                    <ul>
                        <li><a href="https://www.saopaulo.sp.gov.br/">Governo de São Paulo</a></li>
                        <li><a href="https://www.cruesp.sp.gov.br/">Conselhos de Reitores</a></li>
                        <li><a href="https://unesp.br/transparencia/">Transparência Unesp</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h2>SISTEMAS</h2>
                    <ul>
                        <li><a href="https://sistemas.unesp.br/">Sistemas Online</a></li>
                        <li><a href="https://www2.unesp.br/eduroam">EDUROAM</a></li>
                        <li><a href="https://www2.unesp.br/ai/grupos-de-trabalho/redes-de-computadores/conteudos/videoconferencia/">Videoconferência</a></li>
                        <li><a href="https://www2.unesp.br/vpn">VPN</a></li>
                        <li><a href="https://email.unesp.br/">Webmail</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h2>SAÚDE</h2>
                    <ul>
                        <li><a href="https://www.unesp.br/unespsaude/">Unesp Saúde</a></li>
                        <li><a href="https://www.ecaresentinela.com.br/">e-Care Sentinela</a></li>
                        <li><a href="https://www.unesp.br/numis">NUMIS</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h2>INFORMAÇÕES</h2>
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
            {/* Updated container for StaticImage */}
            <div className={styles.imageContainer}>
                <StaticImage 
                    src="../images/dco.png" 
                    alt="Unesp Logo" 
                    width={150}
                    className={styles.centerImage}
                />
                <StaticImage 
                    src="../images/protiva.png" 
                    alt="Unesp Logo" 
                    width={150}
                    className={styles.centerImage}
                />
                <StaticImage 
                    src="../images/unesp.svg" 
                    alt="Unesp Logo" 
                    width={150}
                    className={styles.centerImage}
                />
            </div>
            <div className={styles.footerCopy}>
                <p>{new Date().getFullYear()} Protiva</p>
            </div>
        </footer>
    );
};

export default Footer;
