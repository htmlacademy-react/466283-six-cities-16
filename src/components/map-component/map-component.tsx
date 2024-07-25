import { Map } from 'leaflet';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';

function MapComponent({ city }): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  return <section ref={mapRef} className="cities__map map"></section>;
}

export default MapComponent;
