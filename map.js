import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    // create a map in the "mapid" div
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);

    // add an OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(mymap);

    // add a marker at the given coordinates
    L.marker([51.5, -0.09]).addTo(mymap)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
  }, []);

  return (
    <div id="mapid"></div>
  );
};

export default Map;
