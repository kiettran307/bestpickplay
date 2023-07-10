"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type Props = {};
const defaultCenter = {
  lat: 10.726560,
  lng: 106.710190,
};

export interface Coordinates {
  lat: number;
  lng: number;
}

interface MapsProps {
  containerStyle?: React.CSSProperties;
  center?: Coordinates;
  position?: Coordinates;
  zoom?: number;
}
const GOOGLE_MAP_KEY = "AIzaSyBmzMwV-mAbKUPL_KTZzJbqeoukjxFUm_8";

export function CustomerServiceMap({}: Props) {
  return (
    <>
      <Maps/>
    </>
  );
}

const defaultContainerStyle = {
  width: "100%",
  height: "390px",
  padding:"20px",
  borderRadius:"10px"
};

export function Maps({
  containerStyle = defaultContainerStyle,
  center = defaultCenter,
  position = defaultCenter,
  zoom = 14,
  ...props
}: MapsProps) {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={zoom}
        
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Maps);
