import { Navigate, useParams } from 'react-router-dom';
import { detailOffers } from '../../mocks/detail-offers';
import { comments } from '../../mocks/comments';
import { DetailOffer, DetailOffers } from '../../types/types-offers';
import { Comments } from '../../types/types-comments';
import { calcRaiting } from '../../utils/calc-raiting';
import { getDataDetailOffer } from '../../utils/get-data-detail-offer';
import { getDataComments } from '../../utils/get-data-comments';
import { getDate } from '../../utils/get-date';
import { setLetterUpper } from '../../utils/set-letter-upper';
import { getCountDataOffer } from '../../utils/get-count-data-offer';
import { PRO_ACC, AppRoute } from '../../const';
import FormComment from '../../components/form-comment/form-comment';

function Offer(): JSX.Element {
  const { id } = useParams();

  const dataDetailOffer: DetailOffer | undefined = getDataDetailOffer(
    id,
    detailOffers
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
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src="img/room.jpg"
                    width="260"
                    height="200"
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">
                      &#47;&nbsp;night
                    </span>
                  </div>
                  <button
                    className="place-card__bookmark-button place-card__bookmark-button--active button"
                    type="button"
                  >
                    <svg
                      className="place-card__bookmark-icon"
                      width="18"
                      height="19"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src="img/apartment-02.jpg"
                    width="260"
                    height="200"
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">
                      &#47;&nbsp;night
                    </span>
                  </div>
                  <button
                    className="place-card__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="place-card__bookmark-icon"
                      width="18"
                      height="19"
                    >
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
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src="img/apartment-03.jpg"
                    width="260"
                    height="200"
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">
                      &#47;&nbsp;night
                    </span>
                  </div>
                  <button
                    className="place-card__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="place-card__bookmark-icon"
                      width="18"
                      height="19"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Offer;
