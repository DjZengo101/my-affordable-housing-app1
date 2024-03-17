// src/components/MapView.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapView.css'; // Create corresponding CSS for styling the map

const MapView = ({ searchParams, listings }) => {
  // You would calculate the center based on searchParams or default to a general area.
  
  // For example, if searchParams include coordinates, use them:
  const center = searchParams.coordinates || { lat: -34.397, lng: 150.644 };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
        {listings.map((listing) => (
          <Marker key={listing.id} position={listing.location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
