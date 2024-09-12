const DEFAULT_POSITION = { lng: 127.0495556, lat: 37.514575 };

let currentPosition = DEFAULT_POSITION;
let watchPositionId: number;
let keepWatching = false;

const success: PositionCallback = (pos) => {
  if (!keepWatching) return navigator.geolocation.clearWatch(watchPositionId);

  const { latitude: lat, longitude: lng } = pos.coords;
  currentPosition = { lat, lng };
};

const error: PositionErrorCallback = (err) =>
  console.error(`ERROR(${err.code}): ${err.message}`);

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 5000,
};

watchPositionId = navigator.geolocation.watchPosition(success, error, options);

export default {
  currentPosition,
  setWatchingPosition: (watching: boolean) => (keepWatching = watching),
  onChangePosition: (callback: (position: GeolocationPosition) => void) =>
    navigator.geolocation.watchPosition(callback, error, options),
};
