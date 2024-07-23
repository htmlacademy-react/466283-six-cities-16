import { useState } from 'react';
import { Offer } from '../../types/types-offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { setLetterUpper } from '../../utils/set-letter-upper';
type OfferData = {
  offer: Offer;
};

function MainCard({ offer }: OfferData): JSX.Element {
  const bookmarkClass = offer.isFavorite
    ? 'place-card__bookmark-button--active'
    : '';

  const [card, setCard] = useState({});
  const inCard = () => {
    setCard(offer);
  };
  const outCard = () => {
    setCard({});
  };
  // eslint-disable-next-line no-console
  console.log(card);

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={inCard}
      onMouseLeave={outCard}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer.replace(':id', `${offer.id}`)}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${bookmarkClass}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', `${offer.id}`)}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{setLetterUpper(offer.type)}</p>
      </div>
    </article>
  );
}

export default MainCard;
