import { Link } from 'react-router-dom';
import { Offer } from '../../types/types-offers';
import { AppRoute } from '../../const';
import { setLetterUpper } from '../../utils/set-letter-upper';
import { calcRaiting } from '../../utils/calc-raiting';
type NearOffer = {
  nearOffer: Offer;
};

function NearOffer({ nearOffer }: NearOffer): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer.replace(':id', `${nearOffer.id}`)}>
          <img
            className="place-card__image"
            src={nearOffer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{nearOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${calcRaiting(nearOffer.rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', `${nearOffer.id}`)}>
            {nearOffer.title}
          </Link>
        </h2>
        <p className="place-card__type">{setLetterUpper(nearOffer.type)}</p>
      </div>
    </article>
  );
}

export default NearOffer;
