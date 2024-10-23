import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../categoryProvider/CategoryProvider';
import styles from './Dropdown.module.css';

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const navigate = useNavigate();
    const { setSelectedCategory } = useCategory();

    const handleNavigation = (category: string) => {
        setSelectedCategory(category);
        navigate(`/estude/${category}`);
        window.scrollTo(0, 0);
        setIsOpen(false); 
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.dropdownTitle}
                onClick={toggleDropdown} 
            >
                Estude &#9660;
            </button>
            {isOpen && ( 
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
