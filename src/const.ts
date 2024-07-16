export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
