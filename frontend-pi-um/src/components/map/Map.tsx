import React, { createRef, useLayoutEffect } from 'react';

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
        apikey: process.env.REACT_APP_MAP_API_KEY
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

    // eslint-disable-next-line
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // eslint-disable-next-line
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    
    return () => { map.dispose() }
  }, [mapRef])

  return(
    <div
      ref={mapRef as React.RefObject<HTMLDivElement>}
      style={{ height: "200px", width: "980px" }}
    />
  )
}