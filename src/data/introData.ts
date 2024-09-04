interface CardData {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
}

const cardsData: CardData[] = [
  {
    title: 'Scratch',
    description: 'Aprenda Scratch',
    imageSrc: 'path/to/image1.jpg',
    category: 'intro'
  },
  {
    title: 'Python',
    description: 'Aprenda Python',
    imageSrc: 'path/to/image2.jpg',
    category: 'intro'
  },
  {
    title: 'C',
    description: 'Aprenda C',
    imageSrc: 'path/to/image2.jpg',
    category: 'intro'
  },
];

export default cardsData;
