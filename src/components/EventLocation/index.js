import React, { useState, useCallback } from 'react';
import { GoogleMap, OverlayView, OverlayViewF } from '@react-google-maps/api';
import './styles.css';

// Center of the map (coordinates for Elitis Events Center in Făget)
const mapCenterCoordinates = {
  lat: 46.74925706828539,
  lng: 23.589937983729106,
};
const elitisCoordinates = {
  lat: 46.725863108755014,
  lng: 23.58004341654534,
};

export default function EventLocation() {
  const [map, setMap] = useState();

  const onMapLoad = useCallback((mapRef) => setMap(mapRef), []);
  const onMapUnmount = useCallback(() => setMap(null), []);

  return (
    <div className="event-location">
      <div className="map-container" onClick={() => window.open('https://maps.app.goo.gl/tYqw6WybFfrq8sSu6', '_blank')}>
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '350px',
            pointerEvents: 'none',
          }}
          center={mapCenterCoordinates}
          zoom={12}
          options={{
            styles: mapStyles,

            disableDefaultUI: true,
            mapTypeControl: false,
            gestureHandling: 'none',
            zoomControl: false,
          }}
          onLoad={onMapLoad}
          onUnmount={onMapUnmount}
        >
          {/* <Marker position={elitisCoordinates} /> */}
          <OverlayViewF position={elitisCoordinates} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <div className="client-marker-wrapper">
              <div className="client-marker">
                <img loading="lazy" src="images/elitis-logo.jpg" alt="Elitis Events Center logo" />
                <span className="client-name">Elitis Events Center</span>
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
        color: '#c5c086', // Light gold
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
];
