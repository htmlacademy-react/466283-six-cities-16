import MainCard from '../main-card/main-card';
import { Offer, Offers } from '../../types/types-offers';
type OffersList = {
  offers: Offers;
};

function MainCardsList({ offers }: OffersList): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => (
        <MainCard key={offer.id} offer={offer} />
      ))}
    </>
  );
}

export default MainCardsList;
