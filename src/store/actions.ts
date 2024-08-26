import { createAction } from '@reduxjs/toolkit';
import { Offers, DetailOffer } from '../types/types-offers';
import { AuthorizationStatus } from '../const';
import { Comment, Comments } from '../types/types-comments';
import { NearOffers } from '../types/near-offers';
import { userInfo } from '../types/user';
export const cityAction = createAction('city', (value: string) => ({
  payload: value,
}));
export const offerListAction = createAction('offerList', (value: Offers) => ({
  payload: value,
}));
export const offerDetailAction = createAction(
  'offerDetail',
  (value: DetailOffer) => ({
    payload: value,
  })
);

export const setOfferListAction = createAction<boolean>('setOfferList');
export const setOfferDetailAction = createAction<boolean>('setOfferDetail');

export const sortTypeAction = createAction('sortType', (value: string) => ({
  payload: value,
}));

export const resetTypeAction = createAction('resetType', () => ({
  payload: 'popular',
}));

export const requireAuthorizationAction = createAction(
  'requireAuthorizationAction',
  (value: AuthorizationStatus) => ({ payload: value })
);

export const setError = createAction('setError', (value: null | string) => ({
  payload: value,
}));

export const commentsListAction = createAction(
  'commentsList',
  (value: Comments) => ({
    payload: value,
  })
);

export const setCommentsListAction = createAction<boolean>('setCommentsList');

export const offersNearbyAction = createAction(
  'offersNearby',
  (value: NearOffers) => ({
    payload: value,
  })
);

export const setOffersNearbyAction = createAction<boolean>('setOffersNearby');

export const setCommentAction = createAction(
  'setComment',
  (value: Comment) => ({
    payload: value,
  })
);

export const setEmailAction = createAction('setEmail', (value: userInfo) => ({
  payload: value,
}));

export const changeFavoriteStatusAction = createAction(
  'changeFavoriteStatus',
  (value: DetailOffer) => ({
    payload: value,
  })
);

export const updateOfferAction = createAction('updateOfferAction', (value:string) => ({
  payload: value,
}));

export const clearOffersAction = createAction('clearOffers');
export const resetOffersAction = createAction('resetOffers');
