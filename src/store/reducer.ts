import { createReducer } from '@reduxjs/toolkit';
import { cityAction, offerListAction } from './actions';
import { offersList } from '../mocks/offers';
import { DEFAULT_CITY } from '../const';

const initialState = {
  city: DEFAULT_CITY,
  offersList: offersList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, value) => {
      state.city = value.payload;
    })
    .addCase(offerListAction, (state, value) => {
      state.offersList = value.payload;
    });
});
