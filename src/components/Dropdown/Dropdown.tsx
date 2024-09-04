import { useNavigate } from 'react-router-dom';
import { useCategory } from '../categoryProvider/CategoryProvider';
import styles from './Dropdown.module.css';

const Dropdown: React.FC = () => {
    const navigate = useNavigate();

    const { setSelectedCategory } = useCategory();

    const handleNavigation = (category: string) => {
        setSelectedCategory(category);
        navigate(`/estude/${category}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Estude
                <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles['dropdown-content']}>
                <button className={styles.dropbtn} onClick= {() => handleNavigation("eda")}>Estru. de Dados e Algo.</button>
                <br></br>
                <button className={styles.dropbtn} onClick= {() => handleNavigation("obi")}>OBI - Repostas comentadas</button>
                <br></br>
                <button className={styles.dropbtn} onClick= {() => handleNavigation("intro")}>Intro. Programação</button>
            </div>
        </div>
    );
}

export default Dropdown;
