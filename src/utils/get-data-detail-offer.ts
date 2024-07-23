import { DetailOffers } from '../types/types-offers';

export const getDataDetailOffer = (id: string, detailOffers: DetailOffers) =>
  detailOffers.find((el) => el.id === id);
