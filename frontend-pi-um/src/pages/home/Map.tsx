import React, { createRef, useLayoutEffect } from 'react';
import { API_KEY } from '../../.env'

declare global {
  interface Window {
    H: any;
  }
}

export default function Map(){
  const mapRef = createRef()

  useLayoutEffect(() => {
    if (!mapRef.current) return;
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
        zoom: 15,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);
    
    return () => { map.dispose() }
  }, [mapRef])

  return(
    <div
      ref={mapRef as React.RefObject<HTMLDivElement>}
      style={{ height: "500px" }}
    />
  )
}