import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly storageKey = 'wledBaseUrl';

  setBaseUrl(url: string): void {
    localStorage.setItem(this.storageKey, url);
  }

  getBaseUrl(): string | null {
    return localStorage.getItem(this.storageKey);
  }
}
