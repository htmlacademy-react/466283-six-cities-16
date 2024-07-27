import { Navigate, useParams } from 'react-router-dom';
import { detailOffers } from '../../mocks/detail-offers';
import { comments } from '../../mocks/comments';
import { DetailOffer } from '../../types/types-offers';
import { Comments } from '../../types/types-comments';
import { calcRaiting } from '../../utils/calc-raiting';
import { getDataDetailOffer } from '../../utils/get-data-detail-offer';
import { getDataComments } from '../../utils/get-data-comments';
import { getDate } from '../../utils/get-date';
import { setLetterUpper } from '../../utils/set-letter-upper';
import { getCountDataOffer } from '../../utils/get-count-data-offer';
import { PRO_ACC, AppRoute, CITIES } from '../../const';
import FormComment from '../../components/form-comment/form-comment';
import NearOffer from '../../components/near-offer/near-offer';
import { nearOffers } from '../../mocks/near-offer';
import { NearOffers } from '../../types/near-offers';
import { getDataNearOffers } from '../../utils/get-data-near-offers';
import Map from '../../components/map/map';

function Offer(): JSX.Element {
  const { id } = useParams();

  const dataDetailOffer: DetailOffer | undefined = getDataDetailOffer(
    id,
    detailOffers
  );
  const dataNearOffers: NearOffers | undefined = getDataNearOffers(
    id,
    nearOffers
  );
  const acriveClassAcc: string = dataDetailOffer?.host.isPro ? PRO_ACC : '';
  const dataComments: Comments | undefined = getDataComments(id, comments);

  if (!dataDetailOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {dataDetailOffer.images.map((img: string) => (
              <div key={img} className="offer__image-wrapper">
                <img className="offer__image" src={img} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {dataDetailOffer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{dataDetailOffer.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span
                  style={{ width: `${calcRaiting(dataDetailOffer.rating)}%` }}
                />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {dataDetailOffer.rating}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {setLetterUpper(dataDetailOffer.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {getCountDataOffer(dataDetailOffer.bedrooms, 'Bedroom')}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {getCountDataOffer(dataDetailOffer.maxAdults, 'adult')}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">
                &euro;{dataDetailOffer.price}
              </b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {dataDetailOffer.goods.map((goodItem) => (
                  <li key={goodItem} className="offer__inside-item">
                    {goodItem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div
                  className={`offer__avatar-wrapper ${acriveClassAcc} user__avatar-wrapper`}
                >
                  <img
                    className="offer__avatar user__avatar"
                    src={dataDetailOffer.host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {dataDetailOffer.host.name}
                </span>
                {dataDetailOffer.host.isPro && (
                  <span className="offer__user-status">Pro</span>
                )}
              </div>
              <div className="offer__description">
                <p className="offer__text">{dataDetailOffer.description}</p>
              </div>
            </div>
            {dataComments.length && (
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{dataComments.length}</span>
                </h2>
                <ul className="reviews__list">
                  {dataComments.map((commentItem) => (
                    <li key={commentItem.id} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img
                            className="reviews__avatar user__avatar"
                            src={commentItem.user.avatarUrl}
                            width="54"
                            height="54"
                            alt="Reviews avatar"
                          />
                        </div>
                        <span className="reviews__user-name">
                          {commentItem.user.name}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span
                              style={{
                                width: `${calcRaiting(commentItem.rating)}%`,
                              }}
                            />
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">{commentItem.comment}</p>
                        <time className="reviews__time" dateTime="2019-04-24">
                          {getDate(commentItem.date)}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>
                <FormComment />
              </section>
            )}
          </div>
        </div>
        <section className="offer__map map">
          <Map city={CITIES.Amsterdam} points={dataNearOffers} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {dataNearOffers.slice(0, 3).map((nearOffer) => (
              <NearOffer key={nearOffer.id} nearOffer={nearOffer} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
export default Offer;
