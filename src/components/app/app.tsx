import Main from '../../pages/main/main';

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

function App({ cards }: Cards): JSX.Element {
  return (
    <div>
      <Main cardList={cards} />
    </div>
  );
}

export default App;
