interface CardData {
    title: string;
    description: string;
    imageSrc: string;
    category: string;
}

const cardsData: CardData[] = [
  {
    title: 'Pilha',
    description: 'Aprenda sobre pilhas',
    imageSrc: 'path/to/image1.jpg',
    category: 'eda',
  },
  {
    title: 'Fila',
    description: 'Aprenda sobre filas',
    imageSrc: 'path/to/image2.jpg',
    category: 'eda',
  },
  {
    title: 'Árvores',
    description: 'Aprenda sobre árvores',
    imageSrc: 'path/to/image2.jpg',
    category: 'eda',
  },
  {
    title: 'Grafos',
    description: 'Aprenda sobre grafos',
    imageSrc: 'path/to/image2.jpg',
    category: 'eda',
  },
];

export default cardsData;
