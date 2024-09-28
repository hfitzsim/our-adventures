import { useMap, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';

import { PoI } from '@/types';
import { useState, useEffect, useCallback, useRef } from 'react';

// points of interest
interface PoIMarkersProps {
  PoIs: PoI[];
}
const PoIMarkers: React.FC<PoIMarkersProps> = ({ PoIs }) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);
  const [circleCenter, setCircleCenter] = useState(null);
  const handleClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (!map) return;
    if (!event.latLng) return;
    console.log('marker clicked: ', event.latLng.toString());
    map.panTo(event.latLng);
    setCircleCenter(event.latLng);
  });
  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {PoIs.map((PoI: PoI) => (
        <AdvancedMarker
          key={PoI.key}
          position={PoI.location}
          ref={(marker) => setMarkerRef(marker, PoI.key)}
          clickable={true}
          onClick={handleClick}
        >
          <Pin
            background={'#FBBC04'}
            glyphColor={'#000'}
            borderColor={'#000'}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export { PoIMarkers };
