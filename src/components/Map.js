import * as React from 'react';
import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
const MAP_TOKEN = "pk.eyJ1IjoiamVmZnJleXNmb3JkMiIsImEiOiJja29wb3VpNG8wand3MzFtcHRjb3FyNjdwIn0.sAo5P5XmFNddaSbXQEp4qg"

function Map(props) {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: 400,
        latitude: 39.4143,
        longitude: -77.4105,
        zoom: 11

    });


    return (
        <ReactMapGL
            mapboxApiAccessToken={MAP_TOKEN}
            {...viewport}
            mapStyle='mapbox://styles/jeffreysford2/ckopsi8tw3vqh18q63a73uqzq'
            onViewportChange={nextViewport => setViewport(nextViewport)}
        >
            {props.breweries.map(brewery => (
                <Marker key={brewery.place_id} latitude={brewery.geometry.location.lat} longitude={brewery.geometry.location.lng}>
                    <div>{brewery.name}</div>
                </Marker>
            ))}
        </ReactMapGL>
    );
}

export default Map

