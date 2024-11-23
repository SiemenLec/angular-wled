export interface WLEDInfo {
    ver: string;
    vid: number;
    leds: {
      count: number;
      rgbw: boolean;
      pin: number[];
      pwr: number;
      maxpwr: number;
      maxseg: number;
    };
    name: string;
    udpport: number;
    live: boolean;
    fxcount: number;
    palcount: number;
    ip: string;
    arch: string;
    core: string;
    freeheap: number;
    uptime: number;
    opt: number;
    brand: string;
    product: string;
    btype: string;
    mac: string;
  }
  
  