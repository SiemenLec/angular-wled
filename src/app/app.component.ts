import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WledService } from './wled.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wled-angular';
  wledService = inject(WledService);
  WledData: any;

  getWledData() {
    this.wledService.getWledData().then(data => {
      this.WledData = data;
      console.log('Wled State:');
      console.log(data.state);
    });
  }

  constructor() {
  }
}
