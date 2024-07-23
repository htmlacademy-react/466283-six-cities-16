import { Offers } from '../types/types-offers';

type FavoritesList = {
  [key: string]: Offers;
};

export const getOffersByCity = (favoriteOffers: Offers) => {
  const favoriteOffersByCity: FavoritesList = {};
  favoriteOffers.forEach((item) => {
    if (!favoriteOffersByCity[item.city.name]) {
      favoriteOffersByCity[item.city.name] = [];
    }
    favoriteOffersByCity[item.city.name].push(item);
  });

  return favoriteOffersByCity;
};
