import { useState, useEffect} from 'react';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';
import useMarkdownFiles from '../../hooks/useMarkdownFiles';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './RenderArticlePage.module.css';

const RenderArticlePage = () => {
    const { category, title } = useParams();
    const files = useMarkdownFiles({ title: title || '' });
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (files.length > 0) {
            const fileName = encodeURIComponent(
                files[currentIndex].path.split('/').pop()?.replace('.md', '') || ''
            );
            navigate(`/estude/${category}/${title}/${fileName}`, { replace: true });
        }
    }, [currentIndex, files, navigate, title]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        window.scrollTo(0, 0);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, files.length - 1));
        window.scrollTo(0, 0);
    };

    const currentFile = files[currentIndex];

    return (
        <div>
            <Navbar />
                <div className={styles.container}>
                    <div className={styles.main}>
                        <div className={styles.sidebar}>
                            <ul>
                                {files.map((file, index) => (
                                    <li key={index}>
                                        <a href="#" onClick={() => setCurrentIndex(index)}>
                                            {file.path.split('/').pop()?.replace('.md', '').replace(/_/g,' ')}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.content}>
                            {currentFile ? (
                                <>
                                    <MarkdownRenderer content={currentFile.content} />
                                    <div className={styles.navButtons}>
                                        <button onClick={handlePrevious} disabled={currentIndex === 0}>
                                            Voltar 
                                        </button>
                                        <button onClick={handleNext} disabled={currentIndex === files.length - 1}>
                                            Avançar 
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p>Selecione um arquivo</p>
                            )}
                            </div>
                        </div>
                    </div>
            <Footer />
        </div>
    );
};

export default RenderArticlePage;
