import { Link } from 'react-router-dom';
import { Offers } from '../../types/types-offers';
import FavoriteButton from '../favorite-button/favorite-button';
import { getDetailUrl } from '../../utils/get-detail-url';
import { AppRoute } from '../../const';
type CitiesProps = {
  cityName: string;
  cityList: Offers;
};

function FavoriteItem(props: CitiesProps): JSX.Element {
  const { cityName, cityList } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityList.map((cityItem) => (
          <article key={cityItem.id} className="favorites__card place-card">
            {cityItem.isPremium && (
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
            )}

            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={getDetailUrl(AppRoute.Offer, cityItem.id)}>
                <img
                  className="place-card__image"
                  src={cityItem.previewImage}
                  width="150"
                  height="110"
                  alt="Place image"
                />
              </Link>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">
                    &euro;{cityItem.price}
                  </b>
                  <span className="place-card__price-text">
                    &#47;&nbsp;night
                  </span>
                </div>
                <FavoriteButton idItem={cityItem.id} isFavorite={cityItem.isFavorite} className='place-card' />
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={getDetailUrl(AppRoute.Offer, cityItem.id)}>
                  {cityItem.title}
                </Link>
              </h2>
              <p className="place-card__type">{cityItem.type}</p>
            </div>
          </article>
        ))}
      </div>
    </li>
  );
}

export default FavoriteItem;
