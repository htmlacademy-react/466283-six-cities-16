import { Navigate, useParams } from 'react-router-dom';
import { DetailOffer } from '../../types/types-offers';
import { calcRaiting } from '../../utils/calc-raiting';
import { setLetterUpper } from '../../utils/set-letter-upper';
import { getCountDataOffer } from '../../utils/get-count-data-offer';
import { PRO_ACC, AppRoute } from '../../const';
import NearOffer from '../../components/near-offer/near-offer';
import Map from '../../components/map/map';
import { City } from '../../types/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import { useEffect } from 'react';
import { fetchComments, fetchOfferDetailAction, fetchOffersNearby } from '../../store/api-actions';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import CommentsList from '../../components/comments-list/comments-list';

function Offer(): JSX.Element {
  const {id} = useParams();
  const dataDetailOffer: DetailOffer | null = useAppSelector(
    (state) => state.offerDetail
  );

  const isOfferDetailAction = useAppSelector(
    (state) => state.isOfferDetailAction
  );
  const dataComments = useAppSelector(
    (state) => state.comments
  );
  const iaDataComments = useAppSelector(
    (state) => state.isCommentsAction
  );
  const dataNearOffers = useAppSelector(
    (state) => state.offersNearby
  );
  const iaDataNearOffers = useAppSelector(
    (state) => state.isOffersNearby
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOfferDetailAction(id as string));
    dispatch(fetchComments(id as string));
    dispatch(fetchOffersNearby(id as string));
  }, [dispatch, id]);


  if (isOfferDetailAction || iaDataComments || iaDataNearOffers) {
    return <Loader />;
  }
  const acriveClassAcc: string = dataDetailOffer?.host.isPro ? PRO_ACC : '';

  if (!dataDetailOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }
  const slicedNearOffers = dataNearOffers.slice(0, 3);
  const mapOffers = [...slicedNearOffers, dataDetailOffer];
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
              <h1 className="offer__name">{dataDetailOffer?.title}</h1>
              <FavoriteButton idItem={dataDetailOffer.id} isFavorite={dataDetailOffer.isFavorite} className='offer'/>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span
                  style={{ width: `${calcRaiting(dataDetailOffer.rating)}%` }}
                />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {dataDetailOffer?.rating}
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
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                  Reviews &middot;{' '}
                <span className="reviews__amount">{dataComments.length}</span>
              </h2>
              <CommentsList dataComments={dataComments} />
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map
            city={dataDetailOffer.city.location as City}
            points={mapOffers }
            selectedOffer ={dataDetailOffer}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {slicedNearOffers.slice(0, 3).map((nearOffer) => (
              <NearOffer key={nearOffer.id} nearOffer={nearOffer} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
export default Offer;
