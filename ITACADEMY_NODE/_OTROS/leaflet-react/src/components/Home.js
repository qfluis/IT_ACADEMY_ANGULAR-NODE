import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    
    const [ubicacion, setUbicacion] = useState({lat: 0, lng: 0});    

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setUbicacion({lat: position.coords.latitude, lng: position.coords.longitude})
        }, (error) => {
            console.log(error);
        }, { enableHighAccuracy: true } );
    },[])

  return (
    <>
        <div>Geolocalizacion</div>
        <p>latitud: {ubicacion.lat}</p>
        <p>longitud: {ubicacion.lng}</p>

        <Link to='/map' state={{
            lat: ubicacion.lat,
            lng: ubicacion.lng
        }} >Ir al mapa</Link>
    </>
  )
}
