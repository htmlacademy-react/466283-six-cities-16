import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesList from '../../components/favorite-list/favorite-list';
import { useAppSelector } from '../../hooks';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.favorites);
  return (
    <>
      <main className={`page__main page__main--favorites ${favoriteOffers.length ? '' : 'page__main--favorites-empty'}`}>
        {favoriteOffers.length ? (
          <FavoritesList />
        ) : (
          <FavoritesEmpty />
        )}
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Root} className="footer__log`o-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </>
  );
}

export default Favorites;
