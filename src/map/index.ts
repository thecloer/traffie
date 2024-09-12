import L from "leaflet";
import location from "../lib/location";

const DEFAULT_ZOOM = 11;
const maxZoom = 19;
const TILE_SERVER = "https://tiles.osm.kr/hot/{z}/{x}/{y}.png";

// Leaflet Map
const map = L.map("map")
  .setView(location.currentPosition, DEFAULT_ZOOM)
  .setMaxBounds([
    [32, 123],
    [44, 132.5],
  ])
  .addLayer(L.tileLayer(TILE_SERVER, { maxZoom }));

export default map;
