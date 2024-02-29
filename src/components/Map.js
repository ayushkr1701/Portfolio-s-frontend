import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { MapContainer, Circle, Marker } from "react-leaflet";
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import "leaflet/dist/leaflet.css";

const Map = ({ coordinates, zoom }) => {
  const theme = useTheme();
  const position = coordinates;
  const fillBlueOptions = { fillColor: theme.palette.primary.main };
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      whenCreated={setMap}
      style={{ height: "400px", width: "100%" }}
    >
      <ReactLeafletGoogleLayer
        googleMapsLoaderConf={{
          apiKey: "AIzaSyD1aZUBFt-QHEEWXdCkdsfn8OPW5JnVBCU", // Replace with your Google Maps API key
          // version: "3.42", // You can specify the version if needed
        }}
        // You can change the type of map (e.g., "roadmap", "terrain", "satellite")
        
      />
      <Circle center={position}  pathOptions={fillBlueOptions} radius={30}/>
      
    </MapContainer>
  );
};

export default Map;
