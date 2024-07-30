import { NearOffersList, NearOffers } from '../types/near-offers';

export const getDataNearOffers = (
  id: string | undefined,
  nearOffers: NearOffersList
): NearOffers => (id ? nearOffers[id] : []);
