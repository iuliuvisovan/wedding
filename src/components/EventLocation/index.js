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
          }}
        >
          <OverlayViewF position={centralParkCoordinates} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <div className="client-marker-wrapper" onClick={() => window.open('https://maps.app.goo.gl/7bgsAGgWsF3vWr46A', '_blank')}>
              <div className="location-dot" style={{ background: '#619f0a' }}></div>
              <div className="client-marker" style={{ borderColor: '#619f0a' }}>
                <img loading="lazy" src="https://www.zcj.ro/images/db/1_3_264128_1716653623_06420.jpg" alt="Elitis Events Center logo" />
                <div className="elitis-info">
                  <div className="name">Foișor Parcul Central</div>
                  <div className="address">str. Cardinal Iuliu Hossu 55</div>
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
                  <div className="address">str. Făgetului 74</div>
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
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative.locality', // City names like "Cluj-Napoca"
    elementType: 'labels.text',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'administrative.neighborhood', // Neighborhood names
    elementType: 'labels.text',
    stylers: [{ visibility: 'on' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }, { color: '#e5e3df' }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }, { color: '#f5f5f2' }],
  },
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffecc2', // Light gold
      },
    ],
  },

  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6', // Light white for text stroke
      },
    ],
  },

  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be', // Light gold
      },
    ],
  },

  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c5bc86', // Light gold
      },
    ],
  },

  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c', // Medium gold
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076', // Olive gold
      },
    ],
  },

  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffbd23', // Light white road
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffbd23', // Very light white
      },
    ],
  },

  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62', // Slightly darker gold
      },
    ],
  },

  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffbd23', // Dark gold
      },
    ],
  },

  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d', // Gray-gold for water labels
      },
    ],
  },

  {
    featureType: 'administrative.locality',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
      {
        weight: 5.5,
      },
    ],
  },

  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
