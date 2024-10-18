import React from 'react';
import styles from './CardsContainer.module.css';
import Card from '../card/Card';
import { useCategory } from '../categoryProvider/CategoryProvider';

interface CardData {
    title: string;
    description: string;
    category: string;
}

interface CardsContainerProps {
  cards: CardData[];
}

const CardsContainer: React.FC<CardsContainerProps> = ({ cards }) => {
    const { selectedCategory } = useCategory();

    return (
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            category={selectedCategory}
          />
        ))}
      </div>
    );
};

export default CardsContainer;
