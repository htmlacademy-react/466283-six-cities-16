import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/types-offers';
import { APIRoute } from '../const';
import { offerListAction, setOfferListAction } from './actions';

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
