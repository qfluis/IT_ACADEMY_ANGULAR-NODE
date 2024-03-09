import React from 'react'
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerPicture from './marker.png';
import L from 'leaflet';



export const Markers = ({places}) => {

  const markerImg = L.icon({
    iconUrl: markerPicture,
    iconSize:[35,35]
  });


  return (
    <>
    {
      places.map((p,i) => <Marker key={i} position={p.position} icon={markerImg} />)
    }
    </>
  )
}
