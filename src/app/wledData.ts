import { WLEDState } from './wledState';
import { WLEDInfo } from './wledInfo';

export interface WLEDData {
    state: WLEDState;
    info: WLEDInfo;
    effects: string[];
    palettes: string[];
  }