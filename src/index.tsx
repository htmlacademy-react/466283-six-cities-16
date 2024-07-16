import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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

const cardsList: Cards = [
  {
    id: 1,
    premium: true,
    link: '#',
    img: 'img/apartment-01.jpg',
    price: 120,
    day: 'night',
    name: 'Beautiful &amp; luxurious apartment at great location',
    nameLink: '#',
    type: 'Apartment',
  },
  {
    id: 2,
    premium: false,
    link: '#',
    img: 'img/room.jpg',
    price: 80,
    day: 'night',
    name: 'Wood and stone place',
    nameLink: '#',
    type: 'Room',
  },
  {
    id: 3,
    premium: false,
    link: '#',
    img: 'img/apartment-02.jpg',
    price: 132,
    day: 'night',
    name: 'Canal View Prinsengracht',
    nameLink: '#',
    type: 'Apartment',
  },
  {
    id: 4,
    premium: false,
    link: '#',
    img: 'img/apartment-03.jpg',
    price: 180,
    day: 'night',
    name: 'Nice, cozy, warm big bed apartment',
    nameLink: '#',
    type: 'Apartment',
  },
  {
    id: 5,
    premium: false,
    link: '#',
    img: 'img/room.jpg',
    price: 80,
    day: 'night',
    name: 'Wood and stone place',
    nameLink: '#',
    type: 'Room',
  },
];

root.render(
  <React.StrictMode>
    <App cards={cardsList} />
  </React.StrictMode>
);
