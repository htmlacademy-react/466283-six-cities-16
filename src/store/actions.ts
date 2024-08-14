import { createAction } from '@reduxjs/toolkit';
import { Offers, DetailOffer } from '../types/types-offers';
import { AuthorizationStatus } from '../const';
export const cityAction = createAction('city', (value: string) => ({
  payload: value,
}));
export const offerListAction = createAction('offerList', (value: Offers) => ({
  payload: value,
}));
export const offerDetailAction = createAction(
  'offerDetail',
  (value: DetailOffer) => ({
    payload: value,
  })
);

export const setOfferListAction = createAction<boolean>('setOfferList');
export const setOfferDetailAction = createAction<boolean>('setOfferDetail');

export const sortTypeAction = createAction('sortType', (value: string) => ({
  payload: value,
}));

export const resetTypeAction = createAction('resetType', () => ({
  payload: 'popular',
}));

export const requireAuthorizationAction = createAction(
  'requireAuthorizationAction',
  (value: AuthorizationStatus) => ({ payload: value })
);

export const setError = createAction('setError', (value: null | string) => ({
  payload: value,
}));
