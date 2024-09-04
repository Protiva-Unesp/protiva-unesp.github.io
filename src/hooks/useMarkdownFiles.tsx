import { useState, useEffect } from 'react';

type MarkdownFile = {
    path: string;
    content: string;
};

const useMarkdownFiles = ({ title }: { title: string }) => {
    const [files, setFiles] = useState<MarkdownFile[]>([]);

    useEffect(() => {
        let markdownFiles: Record<string, { markdown: string }> = {};

        switch(title) {
            case "Pilha":
                markdownFiles = import.meta.glob('/src/articles/estruturas_dados/pilha/*.md', { eager: true });
                break;
            case "Fila":
                markdownFiles = import.meta.glob('/src/articles/estruturas_dados/fila/*.md', { eager: true });
                break;
            case "OBI-2020":
                markdownFiles = import.meta.glob('/src/articles/obi/2020/*.md', { eager: true });
                break;
            case "OBI-2021":
                markdownFiles = import.meta.glob('/src/articles/obi/2021/*.md', { eager: true });
                break;
            case "OBI-2022":
                markdownFiles = import.meta.glob('/src/articles/obi/2022/*.md', { eager: true });
                break;
            default:
                console.log("Error - no file loaded")
        }


        const loadedFiles: MarkdownFile[] = Object.entries(markdownFiles).map(([path, module]) => {
            const content = module.markdown || "Content not found";
            return {
                path,
                content
            };
        });


        setFiles(loadedFiles);

    }, [title]);

    return files;
};

export default useMarkdownFiles;
