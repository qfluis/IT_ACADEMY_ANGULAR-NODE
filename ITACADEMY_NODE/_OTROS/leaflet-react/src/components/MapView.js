import React, { useState, useEffect } from 'react';
import {MapContainer, TileLayer } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import { Markers } from './Markers';

const places = [
  {
    name:"IT Academy",
    position: [41.40251282759341, 2.1943142112846066]
  },
  {
    name:"Casita",
    position: [41.45308560904495, 2.217497477356225]
  },
  {
    name:"Pirulo de Glories",
    position:[41.40353551979131, 2.1894506742700726]
  },
  {
    name: "Sagrada Familia",
    position:[41.40363942858268, 2.1743517541624704]
  }  
] 

export const MapView = () => {

  const [mapState, setMapState] = useState({
    currentLocation: {lat: 41.40251282759341, lng: 2.1943142112846066},
    //currentLocation: {},
    zoom: 16
  });

  const location = useLocation();
  

  useEffect(()=>{
    if(location.state.lat && location.state.lng){
      console.log("location", location.state)
      
      setMapState((oldState) => {
        const currentLocation = {
          lat: location.state.lat,
          lng: location.state.lng
        }
        return {...oldState, currentLocation, patito: 'patito'}  
      });
      console.log("estado", mapState);
    }    
  }, []);


  return (
    <div>
        <MapContainer center={mapState.currentLocation} zoom={mapState.zoom}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers places={places} />

        </MapContainer>            

    </div>
  )
}
