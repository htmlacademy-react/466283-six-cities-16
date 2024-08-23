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
  setCommentAction,
  setEmailAction,
  changeFavoriteStatusAction,
  updateOfferAction,
} from './actions';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { Comments, Comment } from '../types/types-comments';
import { NearOffers } from '../types/near-offers';

//запрос предложений
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

//запрос детальной страницы
export const fetchOfferDetailAction = createAsyncThunk<
  void,
  Id,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offerDetail', async (id, { dispatch, extra: api }) => {
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

//запрос на авторизацию
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
    data: { token, avatarUrl },
  } = await api.post<UserData>(APIRoute.Login, { email, password });

  saveToken(token);
  dispatch(setEmailAction({email: email, avatar: avatarUrl}));
  dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
});

//запрос на выход из личного кабинета
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

//запрос комментариев
export const fetchComments = createAsyncThunk<
  void,
  Id,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('commentsList', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
  dispatch(setCommentsListAction(false));
  dispatch(commentsListAction(data));
});

//запрос предложений рядом
export const fetchOffersNearby = createAsyncThunk<
  void,
  Id,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offersNearbyList', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<NearOffers>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(setOffersNearbyAction(false));
  dispatch(offersNearbyAction(data));
});

//отправка комментария
type ShortComment = {
  comment: string;
    rating: number;
}
type AddForm = {
  id: string;
  comment: ShortComment;
}

export const sendComment = createAsyncThunk<
  void,
  AddForm,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('sendComment', async ({id, comment}, { dispatch, extra: api }) => {
  const { data } = await api.post<Comment>(`${APIRoute.Comments}/${id}`, comment);
  dispatch(setCommentAction(data));
});

type Status = {
  id: string;
  status: number;
}
//добавление/удаление из избранного
export const changeFavorite = createAsyncThunk<
  void,
  Status,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('changeFavorite', async ({id, status}, { dispatch, extra: api }) => {
  const { data } = await api.post<DetailOffer>(`${APIRoute.Favorite}/${id}/${status}`);
  dispatch(changeFavoriteStatusAction(data));
  dispatch(updateOfferAction(id));
});

