import React, { createContext, useContext, useState } from 'react';

interface CategoryContextProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
