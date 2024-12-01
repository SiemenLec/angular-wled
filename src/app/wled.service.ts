import { Injectable } from "@angular/core";
import { WLEDData } from "./wledData";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class WledService {
  private baseUrl: string | null = null;

  constructor(private storageService: StorageService) {
    this.baseUrl = this.storageService.getBaseUrl();
  }

  getWledData(): Promise<WLEDData> {
    this.baseUrl = this.storageService.getBaseUrl();
    if (!this.baseUrl) {
      alert("Set a IP Adress of your WLED in the IPConfig Settings")
      return Promise.reject('Base URL not configured. Please set it in the settings.');
    }

    return fetch(`${this.baseUrl}/json`)
      .then(response => response.json())
      .then(data => data as WLEDData);
  }

  setWledData(stateData: Partial<WLEDData['state']>): Promise<void> {
    if (!this.baseUrl) {
      alert("Set a IP Adress of your WLED in the IPConfig Settings")
      return Promise.reject('Base URL not configured. Please set it in the settings.');
    }

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
