import React from 'react';
import { GoogleMap, OverlayView, OverlayViewF } from '@react-google-maps/api';
import './styles.css';

// Center of the map (coordinates for Elitis Events Center in Făget)
const mapCenterCoordinates = {
  lat: 46.74525706828539,
  lng: 23.608007983729106,
};
const elitisCoordinates = {
  lat: 46.725863108755014,
  lng: 23.58004341654534,
};
const centralParkCoordinates = {
  lat: 46.76878878081249,
  lng: 23.57670196776906,
};

export default function EventLocation() {
  return (
    <div className="event-location">
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '350px',
          }}
          center={mapCenterCoordinates}
          zoom={12}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            mapTypeControl: false,
            keyboardShortcuts: false
          }}
        >
          <OverlayViewF position={centralParkCoordinates} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <div className="client-marker-wrapper" onClick={() => window.open('https://maps.app.goo.gl/7bgsAGgWsF3vWr46A', '_blank')}>
              <div className="location-dot" style={{ background: '#709e33' }}></div>
              <div className="client-marker">
                <img loading="lazy" src="images/central-park.jpeg" alt="Foișor Parcul Central" />
                <div className="elitis-info">
                  <div className="name">Parcul Central</div>
                  <div className="address">str. Iuliu Hossu, nr. 55</div>
                </div>
              </div>
            </div>
          </OverlayViewF>
          <OverlayViewF position={elitisCoordinates} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <div className="client-marker-wrapper" onClick={() => window.open('https://maps.app.goo.gl/tYqw6WybFfrq8sSu6', '_blank')}>
              <div className="location-dot"></div>
              <div className="client-marker">
                <img
                  loading="lazy"
                  src="https://elitiscenter.ro/wp-content/uploads/2023/05/DSC08793-Enhanced-NR-1024x683.jpg"
                  alt="Elitis Events Center logo"
                />

                <div className="elitis-info">
                  <div className="name">Elitis Events Center</div>
                  <div className="address">str. Făgetului, nr. 74</div>
                </div>
              </div>
            </div>
          </OverlayViewF>
        </GoogleMap>
      </div>
    </div>
  );
}

// Custom white and gold theme styles
const mapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#333333',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f3f3f3',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ede5d0',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dedede',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffa300',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffa300',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffce00',
      },
      {
        weight: '1.21',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f2f2f2',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e9e9e9',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#d1d1d1',
      },
    ],
  },
];
