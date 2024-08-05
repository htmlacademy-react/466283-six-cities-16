import { Offer } from './types-offers';
export type PlacesSortType =
  | 'popular'
  | 'lowToHeight'
  | 'hightToLow'
  | 'topRated';

export type OfferSortFunction = (a: Offer, b: Offer) => number;

export type PlacesOption = {
  name: string;
  sort: OfferSortFunction | undefined;
};
