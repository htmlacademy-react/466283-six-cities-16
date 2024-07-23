import { Offers } from '../../types/types-offers';
import { getOffersByCity } from '../../utils/get-offers-by-city';
import FavoriteItem from '../favorite-item/favorite-item';
type OffersList = {
  favoriteOffers: Offers;
};

function FavoritesList({ favoriteOffers }: OffersList): JSX.Element {
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
