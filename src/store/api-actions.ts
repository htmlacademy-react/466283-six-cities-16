import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AppDispatch,
  State,
  AuthData,
  UserData,
  Id,
} from '../types/state';
import { AxiosInstance } from 'axios';
import { Offers, DetailOffer } from '../types/types-offers';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import {
  offerListAction,
  setOfferListAction,
  requireAuthorizationAction,
  setError,
  offerDetailAction,
  setOfferDetailAction,
  setCommentsListAction,
  commentsListAction,
  setOffersNearbyAction,
  offersNearbyAction,
} from './actions';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { Comments } from '../types/types-comments';
import { NearOffers } from '../types/near-offers';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offerList', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOfferListAction(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOfferListAction(false));
  dispatch(offerListAction(data));
});

export const fetchOfferDetailAction = createAsyncThunk<
  void,
  Id,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offerDetail', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferDetailAction(true));
  const { data } = await api.get<DetailOffer>(`${APIRoute.Offers}/${id}`);
  dispatch(setOfferDetailAction(false));
  dispatch(offerDetailAction(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
});

export const logIn = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
});

export const logOut = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchComments = createAsyncThunk<
  void,
  Id,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('commentsList', async (id, { dispatch, extra: api }) => {
  dispatch(setCommentsListAction(true));
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
  dispatch(setCommentsListAction(false));
  dispatch(commentsListAction(data));
});

export const fetchOffersNearby = createAsyncThunk<
  void,
  Id,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offersNearbyList', async (id, { dispatch, extra: api }) => {
  dispatch(setOffersNearbyAction(true));
  const { data } = await api.get<NearOffers>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(setOffersNearbyAction(false));
  dispatch(offersNearbyAction(data));
});
