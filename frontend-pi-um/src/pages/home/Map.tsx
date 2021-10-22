import React, { useEffect, useState, createRef } from 'react';
import { API_KEY } from '../../.env'

declare global {
  interface Window {
    H: any;
  }
}


export default function Map(){
  const [map, setMap] = useState(null)
  const mapRef = createRef()

  useEffect(() => {
    let isMounted = true
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: API_KEY
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: -24.2012478, lng: -46.8520655 },
        zoom: 20,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);

    setMap(map)
    return () => { isMounted = false }
  }, [])

  return(
    <div
      ref={mapRef as React.RefObject<HTMLDivElement>}
      style={{ height: "500px" }}
    />
  )
}