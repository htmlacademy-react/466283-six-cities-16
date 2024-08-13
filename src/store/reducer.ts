import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import {
  cityAction,
  offerListAction,
  sortTypeAction,
  resetTypeAction,
  requireAuthorizationAction,
  setOfferListAction,
  setError,
} from './actions';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { Offers } from '../types/types-offers';

type InitialState = {
  city: string;
  offersList: Offers;
  sortType: string;
  authorizationStatus: string;
  isOffersListLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: [],
  sortType: 'popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersListLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, value: PayloadAction<string>) => {
      state.city = value.payload;
    })
    .addCase(offerListAction, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(setOfferListAction, (state, action: PayloadAction<boolean>) => {
      state.isOffersListLoading = action.payload;
    })
    .addCase(sortTypeAction, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    .addCase(resetTypeAction, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    .addCase(
      requireAuthorizationAction,
      (state, action: PayloadAction<string>) => {
        state.authorizationStatus = action.payload;
      }
    )
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
