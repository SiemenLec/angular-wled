import { Injectable } from "@angular/core";
import { WLEDData } from "./wledData"; 

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
}
