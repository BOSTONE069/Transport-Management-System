import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9zdG9uZTAwMSIsImEiOiJjbThuZW5hdXUxb21lMmxzYWozcWtsb3lmIn0.RlzNL-8pwWOAIllEsI1v4w'; // Replace with your Mapbox access token

const Map = ({ start, end }) => {
  useEffect(() => {
    // Validate coordinates before using them
    if (
      !start || !end ||
      isNaN(start.lat) || isNaN(start.lng) ||
      isNaN(end.lat) || isNaN(end.lng)
    ) {
      console.error('Invalid coordinates:', start, end);
      return;
    }

    const map = new mapboxgl.Map({
      container: 'map', // ID of the container element
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [start.lng, start.lat], // Starting position [lng, lat]
      zoom: 10, // Starting zoom level
    });

    map.addControl(new mapboxgl.NavigationControl());

    new mapboxgl.Marker().setLngLat([start.lng, start.lat]).addTo(map);
    new mapboxgl.Marker({ color: 'red' }).setLngLat([end.lng, end.lat]).addTo(map);

    const fetchRoute = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        if (!data.routes || data.routes.length === 0) {
          console.error('No route found:', data);
          return;
        }

        const route = data.routes[0].geometry.coordinates;

        map.on('load', () => {
          map.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: route,
              },
            },
          });

          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#888',
              'line-width': 8,
            },
          });
        });
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchRoute();

    return () => map.remove(); // Cleanup on unmount
  }, [start, end]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
