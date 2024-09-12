import { LatLngBound } from "../types/map.types";

const CCTV_LOCATION_URL = "https://www.utic.go.kr/map/mapcctv.do";

export const fetchCctvs = async (bound: LatLngBound) => {
  const response = await fetch(CCTV_LOCATION_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: `MIN_X=${bound.minLng}&MIN_Y=${bound.minLat}&MAX_X=${bound.maxLng}&MAX_Y=${bound.maxLat}`,
  });
  if (!response.ok) return [];
  const data = response.json();
  console.log(data);
};
