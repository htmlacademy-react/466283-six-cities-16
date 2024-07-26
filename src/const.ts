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

export const CITIES = {
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

export const CITY = {
  title: 'Нью-Йорк',
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10,
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const POINTS = [
  {
    title: 'Саундвью',
    lat: 40.816881,
    lng: -73.872768,
  },
  {
    title: 'Ферри Поинт',
    lat: 40.814909,
    lng: -73.830682,
  },
  {
    title: 'Бронкс',
    lat: 40.862413,
    lng: -73.879357,
  },
  {
    title: 'Инвуд-Хилл',
    lat: 40.870817,
    lng: -73.927112,
  },
  {
    title: 'Пелхэм-Бей-Парк',
    lat: 40.877312,
    lng: -73.807182,
  },
];
