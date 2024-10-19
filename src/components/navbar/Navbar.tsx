import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
//import logo from '../../assets/img/logo.svg';

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
        <div className={`${styles['navbar-container']} ${hidden ? 
            styles['navbar-hidden'] : ''}`}>
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.logoText}>Protiva</div>
                </Link>
                <ul className={styles.topnav}>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Dropdown />
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
