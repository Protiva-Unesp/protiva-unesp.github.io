import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../categoryProvider/CategoryProvider';
import styles from './Dropdown.module.css';

const Dropdown: React.FC = () => {
    const navigate = useNavigate();
    const { setSelectedCategory } = useCategory();
    const [burgerOpen, setBurgerOpen] = useState(false); 
    const burgerRef = useRef<HTMLDivElement>(null);

    const handleNavigation = (category: string) => {
        setSelectedCategory(category);
        navigate(`/estude/${category}`);
        window.scrollTo(0, 0);
        setBurgerOpen(false);
    };

    const toggleDropdown = () => {
        setBurgerOpen(!burgerOpen); 
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (burgerOpen && burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
            setBurgerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [burgerOpen]);

    return (
        <div className={styles.container} ref={burgerRef}>
            <button
                className={styles.dropdownTitle}
                onClick={toggleDropdown} 
            >
                Estude &#9660;
            </button>
            {burgerOpen && (
                <div className={styles['dropdown-content']}>
                    <button className={styles.dropbtn} 
                        onClick={() => handleNavigation("eda")}>
                        Estru. de Dados e Algo.
                    </button>
                    <br />
                    <button className={styles.dropbtn} 
                        onClick={() => handleNavigation("obi")}>
                        OBI - Repostas comentadas
                    </button>
                    <br />
                    <button className={styles.dropbtn} 
                        onClick={() => handleNavigation("intro")}>
                        Intro. Programação
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
