import MainCard from '../main-card/main-card';

type CardsData = {
  id: number;
  premium: boolean;
  link: string;
  img: string;
  price: number;
  day: string;
  name: string;
  nameLink: string;
  type: string;
};

type Cards = {
  cards: CardsData[];
};

function MainCardsList({ cards }: Cards): JSX.Element {
  return (
    <>
      {cards.map((card: CardsData) => (
        <MainCard key={card.id} card={card} />
      ))}
    </>
  );
}

export default MainCardsList;
