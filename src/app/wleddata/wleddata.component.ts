import { Component, inject } from '@angular/core';
import { WledService } from '../wled.service';
import { WLEDData } from '../wledData';

@Component({
  selector: 'app-wleddata',
  standalone: true,
  imports: [],
  templateUrl: './wleddata.component.html',
  styleUrl: './wleddata.component.css'
})
export class WleddataComponent {
  title = 'wled-angular';
  wledService = inject(WledService);
  WledData: WLEDData | undefined;

  getWledData() {
    this.wledService.getWledData().then(data => {
      this.WledData = data;
      console.log('Wled State:');
      console.log(data);
    });
  }
}
