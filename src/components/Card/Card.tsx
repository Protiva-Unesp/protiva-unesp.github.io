import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import useMarkdownFiles from '../../hooks/useMarkdownFiles';

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    category: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, category }) => {
    const navigate = useNavigate();

    const files = useMarkdownFiles({ title });

    const handleButtonClick = () => {
        if (files.length > 0) {
            const fileName = encodeURIComponent(files[0].path.split('/')
                .pop()?.replace('.md', '') || '');
            navigate(`/estude/${category}/${title}/${fileName}`);
        } else {
            console.error('No files found');
        }
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.card} onClick={handleButtonClick}>
            <img src={imageSrc} alt={title} className={`${styles.center} ${styles.image}`} />
            <div className={styles.container}>
                <h4>
                    <b>{title}</b>
                </h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
