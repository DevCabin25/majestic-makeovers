import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.8103,
  lng: 90.4125
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'OUR_AGENCY-MAP-KEY'
  });

  if (loadError) return <div className="text-red-500">Map loading error</div>;
  if (!isLoaded) return <div className="text-blue-500">Loading map...</div>;

  return (
    <div className="rounded-xl shadow-lg overflow-hidden border border-gray-300 h-[300px] w-[400px]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
