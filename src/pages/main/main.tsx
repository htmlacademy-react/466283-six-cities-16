import MainCard from '../../components/main-card/main-card';
import NavList from '../../components/nav-list/nav-list';
import Map from '../../components/map/map';
import { CITIES, sortOptions } from '../../const';
import { Offers, Offer, DetailOffer } from '../../types/types-offers';
import { useEffect, useState } from 'react';
import MainEmpty from '../main-empty/main-empty';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { fetchOffersAction } from '../../store/api-actions';

function Main(): JSX.Element {
  const selectedCity: string = useAppSelector((state) => state.city);
  const offers: Offers = useAppSelector((state) => state.offersList);
  const sortingType = useAppSelector((state) => state.sortType);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null | DetailOffer>(null);
  const [city, setCity] = useState(selectedCity);
  const cityOffers = offers
    .filter((offer) => offer.city.name === city)
    .sort(sortOptions[sortingType].sort);
  const isEmptyOffers = cityOffers.length ? '' : 'page__main--index-empty';
  const handleHover = (newOffer: Offer | null) => {
    setSelectedOffer(newOffer);
  };

  return (
    <main className={`page__main page__main--index  ${isEmptyOffers}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <NavList activeCity={city} onCityChange={setCity} />
      </div>

      <div className="cities">
        {!cityOffers.length ? (
          <MainEmpty city={city} />
        ) : (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityOffers.length} places to stay in {city}
              </b>
              <SortingOptions />
              <div className="cities__places-list places__list tabs__content">
                {cityOffers.map((offer: Offer) => (
                  <MainCard
                    offer={offer}
                    key={offer.id}
                    onHover={handleHover}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={CITIES[city]}
                  points={offers}
                  selectedOffer={selectedOffer as Offer}
                />
              </section>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
