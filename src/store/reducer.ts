import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { cityAction, offerListAction } from './actions';
import { DEFAULT_CITY } from '../const';
import { Offers } from '../types/types-offers';

type InitialState = {
  city: string;
  offersList: Offers;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, value: PayloadAction<string>) => {
      state.city = value.payload;
    })
    .addCase(offerListAction, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    });
});
