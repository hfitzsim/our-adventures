import {
  Map,
  APIProvider,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';
import { MantineProvider } from '@mantine/core';
import { AddAdventure, PoIMarkers } from '@/components';
import locations from '@/assets/locations.json';
import customTheme from './styles/theme';
import '@mantine/core/styles.css';

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => (
  <MantineProvider theme={customTheme}>
    <AddAdventure />
  </MantineProvider>
  /*  <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
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
 </APIProvider> */
);

export default App;
