export interface WLEDState {
    on: boolean;
    bri: number;
    transition: number;
    ps: number;
    pl: number;
    nl: {
      on: boolean;
      dur: number;
      fade: boolean;
      tbri: number;
    };
    udpn: {
      send: boolean;
      recv: boolean;
    };
    seg: {
      start: number;
      stop: number;
      len: number;
      col: [number, number, number, number][];
      fx: number;
      sx: number;
      ix: number;
      pal: number;
      sel: boolean;
      rev: boolean;
      cln: number;
    }[];
  }
  
  