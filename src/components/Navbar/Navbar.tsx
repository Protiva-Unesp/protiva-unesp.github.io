import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import logo from '../../assets/img/logo.svg';

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setHidden(true);  
            } else if (currentScrollY < lastScrollY) {
                setHidden(false);  
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY]);

    return (
        <div className={`${styles['navbar-container']} ${hidden ? styles['navbar-hidden'] : ''}`}>
            <Link to="/"><img className={styles.logoStyle} src={logo} alt="Icon" /></Link>
            <ul className={styles.topnav}>
                <li>
                    <Link

to="/">Início</Link>
                </li>
                <li>
                    <Dropdown />
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
            <div className={styles.socialRow}>
                <div className={styles.socialIcon}> 
                    <a href="https://www.youtube.com/@protiva_unesp"><img src={navIcon3} alt="Icon" /></a>
                    <a href="https://www.instagram.com/protiva_unesp"><img src={navIcon1} alt="Icon" /></a>
                    <a href="https://www.facebook.com/protivaunesp"><img src={navIcon2} alt="Icon" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
