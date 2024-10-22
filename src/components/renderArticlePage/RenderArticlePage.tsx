import { useState, useEffect, useRef } from 'react';
import MarkdownRenderer from '../markdownRenderer/MarkdownRenderer';
import useMarkdownFiles from '../../hooks/useMarkdownFiles';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import styles from './RenderArticlePage.module.css';

const RenderArticlePage = () => {
    const { category, title } = useParams();
    const files = useMarkdownFiles({ title: title || '' });
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false); 
    const sidebarRef = useRef<HTMLDivElement | null>(null); 
    const burgerRef = useRef<HTMLDivElement | null>(null); 

    useEffect(() => {
        if (files.length > 0) {
            const fileName = encodeURIComponent(
                files[currentIndex].path.split('/').pop()?.replace('.md', '') 
                    || ''
            );
            navigate(`/estude/${category}/${title}/${fileName}`, 
                     { replace: true });
        }
    }, [currentIndex, files, navigate, title]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        window.scrollTo(0, 0);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 
                                                files.length - 1));
        window.scrollTo(0, 0);
    };

    const currentFile = files[currentIndex];

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev); 
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            sidebarRef.current && 
            !sidebarRef.current.contains(event.target as Node) && 
            burgerRef.current && 
            !burgerRef.current.contains(event.target as Node) 
        ) {
            setSidebarOpen(false); 
        }
    };

    useEffect(() => {
        if (sidebarOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <div>
            <Navbar />
            <div 
                ref={burgerRef} 
                className={styles.burger} 
                onClick={toggleSidebar}
            >
                &#9654; 
            </div>
            <div className={styles.container}>
                <div ref={sidebarRef} className={`${styles.sidebar} 
                    ${sidebarOpen ? styles.open : ''}`}>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>
                            <a href="#" onClick={() => 
                                setCurrentIndex(index)}>
                                {file.path.split('/').pop()?.
                                replace('.md', '').
                                replace(/_/g, ' ')}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.markdownContent}>
                    {currentFile ? (
                        <div>
                            <MarkdownRenderer content={currentFile.content} />
                            <div className={styles.navButtons}>
                                <button className={styles.left} onClick={handlePrevious} 
                                    disabled={currentIndex === 0}>
                                        &#9664; Voltar
                                </button>
                                <button className={styles.right} onClick={handleNext} disabled={
                                    currentIndex === files.length - 1}>
                                        Avançar &#9654; 
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p>Selecione um arquivo</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RenderArticlePage;
