import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import {
  cityAction,
  offerListAction,
  sortTypeAction,
  resetTypeAction,
  requireAuthorizationAction,
  setOfferListAction,
  setError,
  offerDetailAction,
  setOfferDetailAction,
  commentsListAction,
  setCommentsListAction,
  offersNearbyAction,
  setOffersNearbyAction,
} from './actions';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { DetailOffer, Offers } from '../types/types-offers';
import { Comments } from '../types/types-comments';
import { NearOffers } from '../types/near-offers';

type InitialState = {
  city: string;
  offersList: Offers;
  offerDetail: DetailOffer | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersListLoading: boolean;
  isOfferDetailAction: boolean;
  error: string | null;
  comments: Comments;
  isCommentsAction: boolean;
  offersNearby: NearOffers;
  isOffersNearby: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: [],
  offerDetail: null,
  sortType: 'popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersListLoading: false,
  isOfferDetailAction: false,
  error: null,
  comments: [],
  isCommentsAction: false,
  offersNearby: [],
  isOffersNearby: false,

};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, value: PayloadAction<string>) => {
      state.city = value.payload;
    })
    .addCase(offerListAction, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    .addCase(setOfferDetailAction, (state, action: PayloadAction<boolean>) => {
      state.isOfferDetailAction = action.payload;
    })
    .addCase(offerDetailAction, (state, action: PayloadAction<DetailOffer>) => {
      state.offerDetail = action.payload;
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
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(commentsListAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCommentsListAction, (state, action: PayloadAction<boolean>) => {
      state.isOfferDetailAction = action.payload;
    })
    .addCase(offersNearbyAction, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setOffersNearbyAction, (state, action: PayloadAction<boolean>) => {
      state.isOffersNearby = action.payload;
    });
});
