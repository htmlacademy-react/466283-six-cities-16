import { Offer } from './types-offers';

export type NearOffers = Offer[];

export type NearOffersList = {
  [key: string]: NearOffers;
};
