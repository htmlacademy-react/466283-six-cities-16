import MainCard from '../../components/main-card/main-card';
import NavList from '../../components/nav-list/nav-list';
import Map from '../../components/map/map';
import { CITIES } from '../../const';
import { Offers, Offer } from '../../types/types-offers';
import { useState } from 'react';
type OffersList = {
  offers: Offers;
};

function Main({ offers }: OffersList): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState({});

  const handleHover = (newOffer) => {
    setSelectedOffer(newOffer);
    console.log(newOffer);
  };
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <NavList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in Amsterdam
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer: Offer) => (
                <MainCard offer={offer} key={offer.id} onHover={handleHover} />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={CITIES.Amsterdam} points={offers} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
