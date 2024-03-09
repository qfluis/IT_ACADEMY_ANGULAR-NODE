import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import { useEffect, useState } from 'react';
import './Mapita.css';
import markerPicture from './marker.png';

const markerImg = L.icon({
    iconUrl: markerPicture,
    iconSize:[35,35]
});

const PopUp = () => {
    return (
        <>
            <h4>Introduce nombre:</h4>
            <input type="text" />
        </>
    );
}

const ControladorMapa = ({crearMarkerPopup}) => {
    const map = useMap();
    useEffect(()=>{
        map.on("click", (event)=> {
            crearMarkerPopup(event.latlng);
        });
    },[]);
    
    return null;
}


export const Mapita = () => {

    var map;     
          
    // TODO: https://react-leaflet.js.org/docs/start-introduction/
    // TODO: https://react-leaflet.js.org/docs/api-map/#mapcontainer
    
    const [markers, setMarkers] = useState ([]);

    const crearMarkerPopup = (latlang) => {
        setMarkers([...markers, latlang]);        
    }

    return (
        <>
        <h1>Mapita</h1>
        <MapContainer center={[41.40259959831558, 2.1945373890103843]} zoom={16}  >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ControladorMapa crearMarkerPopup={crearMarkerPopup} />
            <Marker position={[41.40259959831558, 2.1945373890103843]} icon={markerImg} >
                <Popup>
                    oLA K ASE!
                </Popup>
            </Marker>
            <Marker position={[41.40290, 2.19490]} icon={markerImg} eventHandlers={{
                    click: () => {
                    console.log('MAPA CLIK')
                    },
            }} >
                <Popup>Mira la consola</Popup>
            </Marker>
            {
                markers.map((m,i) => 
                    <Marker key={i} position={m} icon={markerImg}>
                        <Popup>Ola k ase</Popup>
                    </Marker> 
                )
            }
        </MapContainer>
        </>
    ) 
        
}