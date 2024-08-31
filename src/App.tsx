
import { Map, APIProvider, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { PoIMarkers } from '@/components';
import locations from '@/assets/locations.json';

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => (
 <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
   <Map
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }
      mapId='da37f3254c6a6d1c'
      >
    <PoIMarkers PoIs={locations} />
    </Map>
 </APIProvider>
);

export default App
