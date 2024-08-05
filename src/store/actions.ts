import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/types-offers';
export const cityAction = createAction('city', (value: string) => ({
  payload: value,
}));
export const offerListAction = createAction('offerList', (value: Offers) => ({
  payload: value,
}));

export const sortTypeAction = createAction('sortType', (value: string) => ({
  payload: value,
}));

export const resetTypeAction = createAction('resetType', () => ({
  payload: 'popular',
}));
