import React, { useRef, useEffect } from 'react';
import './Map.css';

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    // ✅ Check if OpenLayers is available
    if (!window.ol || !window.ol.Map || !window.ol.layer || !window.ol.source || !window.ol.View) {
      console.warn('OpenLayers (ol) is not available.');
      return;
    }

    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);

  const isOLAvailable = window.ol && window.ol.Map;

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    >
      {!isOLAvailable && <p>🗺️ Map is unavailable. Please try again later.</p>}
    </div>
  );
};

export default Map;
