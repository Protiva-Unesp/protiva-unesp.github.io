import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className={`${styles.container}`} ref={menuRef}>
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
