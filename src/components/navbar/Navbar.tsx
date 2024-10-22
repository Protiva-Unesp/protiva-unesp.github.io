import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className={`${styles.container}`}>
            <Link to="/">
                <div className={styles.logoText}>Protiva</div>
            </Link>
            <div className={styles.burger} onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`${styles.topnav} ${menuOpen ? styles.active : ''}`}>
                <li>
                    <Dropdown />
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/quemsomos">Quem somos</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
