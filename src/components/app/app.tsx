import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import Layout from '../../components/layout/layout';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const isOffersListLoading = useAppSelector(
    (state) => state.isOffersListLoading
  );

  if (isOffersListLoading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<Main />} />
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
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
