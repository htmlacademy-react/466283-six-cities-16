import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import Layout from '../../components/layout/layout';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<Main cardList={cards} />} />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
