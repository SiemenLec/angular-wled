import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class WledService {
    readonly baseUrl = '192.168.0.105';
    getWledData() {
        return fetch(`http://${this.baseUrl}/json`)
            .then(response => response.json())
            .then(data => {
                return data;
            });
}
}