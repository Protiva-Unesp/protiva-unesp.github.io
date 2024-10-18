import React from 'react';
import styles from './Content.module.css';

const Content: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>
                    Descrição sobre o projeto Protiva
                </p>
            </div>
        </div>
    );
};

export default Content;
