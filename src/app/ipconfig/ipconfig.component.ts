import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-ip-config',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="ip-config">
      <h2>Configure WLED IP Address</h2>
      <form [formGroup]="ipForm" (ngSubmit)="onSubmit()">
        <label for="ipAddress">IP Address</label>
        <input id="ipAddress" type="text" formControlName="ipAddress" placeholder="http://192.168.x.x" />
        <button type="submit">Save</button>
      </form>
    </div>
  `,
  styles: [`
    .ip-config { padding: 1rem; }
    label { display: block; margin-bottom: 0.5rem; }
    input { padding: 0.5rem; margin-bottom: 1rem; }
  `]
})
export class IpConfigComponent {
  ipForm = new FormGroup({
    ipAddress: new FormControl('')
  });

  constructor(private storageService: StorageService) {
    const savedIp = this.storageService.getBaseUrl();
    if (savedIp) {
      this.ipForm.patchValue({ ipAddress: savedIp });
    }
  }

  onSubmit(): void {
    const ipAddress = this.ipForm.value.ipAddress;
    if (ipAddress) {
      this.storageService.setBaseUrl(ipAddress);
      alert('IP Address saved successfully!');
    } else {
      alert('Please enter a valid IP address.');
    }
  }
}
