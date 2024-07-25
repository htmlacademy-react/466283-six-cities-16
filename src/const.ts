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

export const FAVORITE_BUTTON = 'place-card__bookmark-button--active';
export const PRO_ACC = 'offer__avatar-wrapper--pro';

export const MONTHS = [
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

export const Cities = {
  Paris: {
    name: 'Paris',
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
  },
  Cologne: {
    name: 'Cologne',
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
  },
  Brussels: {
    name: 'Brussels',
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
  },
  Hamburg: {
    name: 'Hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
  },
};

export const CITY = {
  title: 'Нью-Йорк',
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10,
};
