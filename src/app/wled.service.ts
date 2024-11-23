import { Injectable } from "@angular/core";
import { WLEDData } from "./wledData"; 
import { WLEDInfo } from "./wledInfo";
import { WLEDState } from "./wledState";

@Injectable({
  providedIn: 'root'
})
export class WledService {
  readonly baseUrl = '192.168.0.105';

  getWledData(): Promise<WLEDData> {
    return fetch(`http://${this.baseUrl}/json`)
      .then(response => response.json())
      .then(data => data as WLEDData); // Cast the data to WLEDData
  }

    // setWledState(state: WLEDState): Promise<void> {
    //     return fetch(`http://${this.baseUrl}/json/state`, {
    //     method: 'POST',
    //     body: JSON.stringify(state)
    //     }).then(() => {});
    // }
}
