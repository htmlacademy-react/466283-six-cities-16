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
  setCommentAction,
} from './actions';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { DetailOffer, Offers } from '../types/types-offers';
import { Comments, Comment } from '../types/types-comments';
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
  comments: Comment[];
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
  isOffersListLoading: true,
  isOfferDetailAction: true,
  error: null,
  comments: [],
  isCommentsAction: true,
  offersNearby: [],
  isOffersNearby: true,
};
type ShortComment = {
  comment: string;
    rating: number;
}
export const reducer = createReducer(initialState, (builder) => {
  builder
    //смена города
    .addCase(cityAction, (state, value: PayloadAction<string>) => {
      state.city = value.payload;
    })
    //загрузка предложений
    .addCase(offerListAction, (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    })
    //проверка загрузки предложений
    .addCase(setOfferListAction, (state, action: PayloadAction<boolean>) => {
      state.isOffersListLoading = action.payload;
    })
    //загрузка детального предложения
    .addCase(offerDetailAction, (state, action: PayloadAction<DetailOffer>) => {
      state.offerDetail = action.payload;
    })
    //проверка загрузки детального предложения
    .addCase(setOfferDetailAction, (state, action: PayloadAction<boolean>) => {
      state.isOfferDetailAction = action.payload;
    })
    //Тип сортировки
    .addCase(sortTypeAction, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    //Сбросить тип сортировки
    .addCase(resetTypeAction, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    //Авторизация
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    //вывод ошибки
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
  //получение комментариев
    .addCase(commentsListAction, (state, action) => {
      state.comments = action.payload;
    })
  //проверка загрузки комментариев
    .addCase(setCommentsListAction, (state, action: PayloadAction<boolean>) => {
      state.isCommentsAction = action.payload;
    })
    //получение предложений рядом
    .addCase(offersNearbyAction, (state, action) => {
      state.offersNearby = action.payload;
    })
    //проверка загрузки предложений рядом
    .addCase(setOffersNearbyAction, (state, action: PayloadAction<boolean>) => {
      state.isOffersNearby = action.payload;
    })
    //отправка комментария
    .addCase(setCommentAction, (state, action: PayloadAction<ShortComment>) => {
      state.comments.push(action.payload);
    });

});
