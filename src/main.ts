import "leaflet/dist/leaflet.css";
import "./style.css";
import { LatLngExpression } from "leaflet";
import map from "./map";
import { CctvMarker } from "./map/CctvMarker";

// const cctv_dummy: LatLngExpression[] = [
//   { lng: 127.0495556, lat: 37.514575 },
//   { lng: 127.1258639, lat: 37.52736667 },
//   { lng: 127.0277194, lat: 37.63695556 },
//   { lng: 126.851675, lat: 37.54815556 },
//   { lng: 126.9538444, lat: 37.47538611 },
//   { lng: 127.0845333, lat: 37.53573889 },
//   { lng: 126.8895972, lat: 37.49265 },
//   { lng: 126.9041972, lat: 37.44910833 },
//   { lng: 127.0583889, lat: 37.65146111 },
//   { lng: 127.0495222, lat: 37.66583333 },
//   { lng: 127.0421417, lat: 37.571625 },
//   { lng: 126.941575, lat: 37.50965556 },
//   { lng: 126.9105306, lat: 37.56070556 },
//   { lng: 126.9388972, lat: 37.57636667 },
//   { lng: 127.0348111, lat: 37.48078611 },
//   { lng: 127.039, lat: 37.56061111 },
//   { lng: 127.0203333, lat: 37.58638333 },
//   { lng: 127.1079306, lat: 37.51175556 },
//   { lng: 126.8687083, lat: 37.51423056 },
//   { lng: 126.8983417, lat: 37.52361111 },
//   { lng: 126.9675222, lat: 37.53609444 },
//   { lng: 126.9312417, lat: 37.59996944 },
//   { lng: 126.9816417, lat: 37.57037778 },
//   { lng: 126.9996417, lat: 37.56100278 },
//   { lng: 127.0947778, lat: 37.60380556 },
//   { lng: 129.3301754, lat: 35.54404265 },
//   { lng: 129.4166919, lat: 35.50516996 },
//   { lng: 129.361245, lat: 35.58270783 },
//   { lng: 129.2424748, lat: 35.52230648 },
//   { lng: 129.3328162, lat: 35.56971228 },
//   { lng: 126.4878417, lat: 37.74692907 },
// ];

// cctv_dummy.forEach((position) => {
//   map.addLayer(CctvMarker(position));
// });

const getBound = () => {
  const bound = map.getBounds();
  return {
    minLat: bound.getSouth(),
    maxLat: bound.getNorth(),
    minLng: bound.getWest(),
    maxLng: bound.getEast(),
  };
};

const drawCctvs = () => {
  const bound = getBound();
  console.log(bound);
};
map.on("moveend", drawCctvs);
