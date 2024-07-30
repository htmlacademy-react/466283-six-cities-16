export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type City = {
  latitude: number;
  longitude: number;
  name: string;
  zoom: number;
};
