export interface WLEDData {
  state: WLEDState;
  info: WLEDInfo;
  effects: string[];
  palettes: string[];
}

export interface WLEDInfo {
  ver: string;
  vid: number;
  leds: {
      count: number;
      pwr: number;
      fps: number;
      maxpwr: number;
      maxseg: number;
      seglc: number[];
      lc: number;
      rgbw: boolean;
      wv: number;
      cct: number;
  };
  str: boolean;
  name: string;
  udpport: number;
  live: boolean;
  liveseg: number;
  lm: string;
  lip: string;
  ws: number;
  fxcount: number;
  palcount: number;
  cpalcount: number;
  maps: { id: number }[];
  wifi: {
      bssid: string;
      rssi: number;
      signal: number;
      channel: number;
  };
  fs: {
      u: number;
      t: number;
      pmt: number;
  };
  ndc: number;
  arch: string;
  core: string;
  lwip: number;
  freeheap: number;
  uptime: number;
  time: string;
  opt: number;
  brand: string;
  product: string;
  mac: string;
  ip: string;
}

export interface WLEDState {
  on: boolean;
  bri: number;
  transition: number;
  ps: number;
  pl: number;
  nl: {
      on: boolean;
      dur: number;
      mode: number;
      tbri: number;
      rem: number;
  };
  udpn: {
      send: boolean;
      recv: boolean;
      sgrp: number;
      rgrp: number;
  };
  lor: number;
  mainseg: number;
  seg: {
      id: number;
      start: number;
      stop: number;
      len: number;
      grp: number;
      spc: number;
      of: number;
      on: boolean;
      frz: boolean;
      bri: number;
      cct: number;
      set: number;
      col: [number, number, number][];
      fx: number;
      sx: number;
      ix: number;
      pal: number;
      c1: number;
      c2: number;
      c3: number;
      sel: boolean;
      rev: boolean;
      mi: boolean;
      o1: boolean;
      o2: boolean;
      o3: boolean;
      si: number;
      m12: number;
  }[];
}
