import * as React from 'react';
import { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import './Map.css'
const MAP_TOKEN = "pk.eyJ1IjoiamVmZnJleXNmb3JkMiIsImEiOiJja29wb3VpNG8wand3MzFtcHRjb3FyNjdwIn0.sAo5P5XmFNddaSbXQEp4qg"

function Map(props) {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            console.log("updating width");
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    //console.log("give width", width);


    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100vh',
        latitude: 39.4143,
        longitude: -77.4105,
        zoom: 11

    });
    const [selectedBrewery, setSelectedBrewery] = useState(null);

    useEffect(() => {
        setViewport({
            width: '100%',
            height: '100vh',
            latitude: 39.4143,
            longitude: -77.4105,
            zoom: 11
        })
    }, [width])

    useEffect(() => {
        const listener = e => {
            if (e.key === 'Escape') {
                setSelectedBrewery(null)
            }
        };
        window.addEventListener('keydown', listener);
        return () => {
            window.removeEventListener('keydown', listener);
        }
    }, [])




    return (
        <ReactMapGL
            mapboxApiAccessToken={MAP_TOKEN}
            {...viewport}
            mapStyle='mapbox://styles/jeffreysford2/ckopsi8tw3vqh18q63a73uqzq'
            onViewportChange={nextViewport => setViewport(nextViewport)}
        >
            {props.breweries.map(brewery => (
                <Marker key={brewery.place_id} latitude={brewery.geometry.location.lat} longitude={brewery.geometry.location.lng}>

                    <img src={process.env.PUBLIC_URL + '/beer-15.svg'} alt="beer-image" className='marker-btn' onClick={(e) => {
                        e.preventDefault();
                        setSelectedBrewery(brewery)
                    }} />

                </Marker>
            ))}
            {selectedBrewery ? (
                <Popup
                    latitude={selectedBrewery.geometry.location.lat}
                    longitude={selectedBrewery.geometry.location.lng}
                    onClose={() => {
                        setSelectedBrewery(null)
                    }}
                >
                    <div>
                        <b>{selectedBrewery.name}</b>
                        <p>Rating: {selectedBrewery.rating}</p>
                    </div>
                </Popup>
            ) : null}


        </ReactMapGL>
    );
}

export default Map

