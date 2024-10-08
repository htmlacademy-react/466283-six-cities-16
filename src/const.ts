export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorites = '/favorites',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Ratings = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export const FAVORITE_BUTTON: string = 'place-card__bookmark-button--active';
export const PRO_ACC: string = 'offer__avatar-wrapper--pro';

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
];


export const DEFAULT_CITY = 'Paris';
export const CITIES: Cities = {
  Paris: {
    name: 'Paris',
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  Cologne: {
    name: 'Cologne',
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  Brussels: {
    name: 'Brussels',
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  Amsterdam: {
    name: 'Amsterdam',
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  Hamburg: {
    name: 'Hamburg',
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

export const URL_MARKER_DEFAULT: string = '../img/pin.svg';

export const URL_MARKER_CURRENT: string = '../img/pin-active.svg';

export enum MapLayer {
  Template = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export enum UrlMapMarker {
  Default = '../img/pin.svg',
  Active = '../img/pin-active.svg',
}

import { Cities } from './types/cities';
import { PlacesOption } from './types/sorting-options';

export const sortOptions: Record<string, PlacesOption> = {
  popular: {
    name: 'Popular',
    sort: () => 0,
  },
  lowToHeight: {
    name: 'Price: low to hight',
    sort: (a, b) => a.price - b.price,
  },
  hightToLow: {
    name: 'Price: hight to low',
    sort: (a, b) => b.price - a.price,
  },
  topRated: {
    name: 'Top rated first',
    sort: (a, b) => b.rating - a.rating,
  },
};

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum Numbers {
  Zero = 0,
  Three = 3,
  Ten = 10,
}

export enum CommentLength {
  MinLength = 50,
  MaxLength = 300,
}

export const URL_API = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIME = 5000;
