import { DetailOffers } from '../types/types-offers';

export const getDataDetailOffer = (
  id: string | undefined,
  detailOffers: DetailOffers
) => detailOffers.find((el) => el.id === id);
