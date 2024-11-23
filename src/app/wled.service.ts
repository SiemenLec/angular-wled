import { Injectable } from "@angular/core";
import { WLEDData } from "./wledData"; 

@Injectable({
  providedIn: 'root'
})
export class WledService {
  readonly baseUrl = 'http://192.168.0.174';

  getWledData(): Promise<WLEDData> {
    return fetch(`${this.baseUrl}/json`)
      .then(response => response.json())
      .then(data => data as WLEDData);
  }

  setWledData(stateData: Partial<WLEDData['state']>): Promise<void> {
    return fetch(`${this.baseUrl}/json/state`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stateData)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to set WLED state data');
      }
    });
  }
}