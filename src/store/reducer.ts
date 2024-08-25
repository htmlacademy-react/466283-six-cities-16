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
  setEmailAction,
  changeFavoriteStatusAction,
  updateOfferAction,
} from './actions';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { DetailOffer, Offers } from '../types/types-offers';
import { Comment } from '../types/types-comments';
import { NearOffers } from '../types/near-offers';
import { userInfo } from '../types/user';
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
  userInfo: userInfo;
  favorites: DetailOffer[];
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
  userInfo: {
    email: '',
    avatar: '',
  },
  favorites: [],
};

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
    .addCase(setCommentAction, (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    })
    //добавление почты
    .addCase(setEmailAction, (state, action: PayloadAction<userInfo>) => {
      state.userInfo = action.payload;
    })
    .addCase(
      changeFavoriteStatusAction,
      (state, action: PayloadAction<DetailOffer>) => {
        if (action.payload.isFavorite) {
          state.favorites = [...state.favorites, action.payload];
        } else {
          state.favorites = state.favorites.filter(
            (favoriteOffer) => favoriteOffer.id !== action.payload.id
          );
        }
      }
    )
    .addCase(updateOfferAction, (state, action) => {
      state.offersList = state.offersList.map((offer) =>
        offer.id === action.payload
          ? { ...offer, isFavorite: !offer?.isFavorite }
          : offer
      );
      if(state.offerDetail) {
        state.offerDetail =
        state.offerDetail?.id === action.payload
          ? { ...state.offerDetail, isFavorite: !state.offerDetail?.isFavorite }
          : state.offerDetail;
      }
      if (state.offersNearby.length) {
        state.offersNearby = state.offersNearby.map((offer) =>
          offer.id === action.payload
            ? { ...offer, isFavorite: !offer?.isFavorite }
            : offer
        );
      }
    });
});
