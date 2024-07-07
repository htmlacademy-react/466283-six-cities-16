import Main from '../../pages/main/Main';

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
type Cards = CardsData[];

function App(cards: Cards): JSX.Element {
  return (
    <div>
      <Main cardsList={cards} />
    </div>
  );
}

export default App;
