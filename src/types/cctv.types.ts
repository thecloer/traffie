export type CctvRaw = {
  CCTVID: string; // "L010268"
  CCTVIP: null;
  CCTVNAME: string; // "잠실대교북단"
  CENTERNAME: string; // "서울교통정보센터"
  CH: string; // 52
  ID: string; // "202"
  KIND: string; // "MODE"
  MOVIE: "N" | "Y";
  PASSWD: null;
  PORT: null;
  STRMID: string; // "L010268";
  XCOORD: number; // lng 127.08826;
  YCOORD: number; // lat 37.52834;
};

export type CctvData = {
  id: string; // CctvRaw.ID
  cctvId: string; // CctvRaw.CCTVID
  cctvName: string; // CctvRaw.CCTVNAME
  movie: boolean; // CctvRaw.MOVIE
  streamId: string; // CctvRaw.STRMID
  lng: number; // CctvRaw.XCOORD
  lat: number; // CctvRaw.YCOORD
};
