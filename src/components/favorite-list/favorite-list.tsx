import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/api-actions';
import { DetailOffer, Offers } from '../../types/types-offers';
import { getOffersByCity } from '../../utils/get-offers-by-city';
import FavoriteItem from '../favorite-item/favorite-item';
type FavoritesList = {
  [key: string]: Offers;
};
function FavoritesList(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  const favoriteOffers: DetailOffer[] = useAppSelector((state) => state.favorites);
  const favoritesCards = getOffersByCity(favoriteOffers);

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {Object.entries(favoritesCards).map(([cityName, cityList]) => (
            <FavoriteItem
              key={cityName}
              cityName={cityName}
              cityList={cityList}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default FavoritesList;
