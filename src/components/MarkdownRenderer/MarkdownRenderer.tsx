import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../Content/Content.module.css';

interface MarkdownRendererProps {
    content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ( { content } ) => {
    return (
        <div className={styles.content}>
            <ReactMarkdown>{ content }</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
