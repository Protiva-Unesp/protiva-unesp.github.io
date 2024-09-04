interface CardData {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
}

const cardsData: CardData[] = [
  {
    title: 'OBI-2020',
    description: 'Respostas comentadas OBI 2020',
    imageSrc: 'path/to/image1.jpg',
    category: 'obi',
  },
  {
    title: 'OBI-2021',
    description: 'Respostas comentadas OBI 2021',
    imageSrc: 'path/to/image1.jpg',
    category: 'obi',
  },
  {
    title: 'OBI-2022',
    description: 'Respostas comentadas OBI 2022',
    imageSrc: 'path/to/image1.jpg',
    category: 'obi',
  },
];

export default cardsData;
