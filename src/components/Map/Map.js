import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [51.505, -0.09];
  const secPosition = [51.45, -0.11];
  return (
    <section className="map-wrap">
      <MapContainer
        style={{ height: '560px' }}
        center={position}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Main Office</strong>
            <br />
            Mail : archone@mail.com
            <br />
            Address : 1892 Chenoweth Drive TN
            <br />
            Phone : 123-456-3451
          </Popup>
        </Marker>
        <Marker position={secPosition}>
          <Popup>
            <strong>Office II</strong>
            <br />
            Mail : archtwo@mail.com
            <br />
            Address : 3399 Wines Lane TX
            <br />
            Phone : 832-123-4321
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
