import React from 'react';
import styles from './ImageComponent.module.css';

const ImageComponent: React.FC = () => {
    return (
        <div className={styles['image-container']}>
            <img src="imgs/unesp.svg" alt="Logo" />
        </div>
    );
};

export default ImageComponent;
