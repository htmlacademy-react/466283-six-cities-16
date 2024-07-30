import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { Offer, Offers } from '../../types/types-offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { City } from '../../types/cities';

type MapProps = {
  city: City;
  points: Offers;
  selectedOffer?: Offer | null;
};
const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, points, selectedOffer }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const { latitude: lat, longitude: lng, zoom } = city;
      map.setView([lat, lng], zoom);

      const markerLayer = leaflet.layerGroup().addTo(map);
      markerLayer.clearLayers();
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon:
                point.id === selectedOffer?.id
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedOffer, city]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
