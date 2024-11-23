import { Component, inject } from '@angular/core';
import { WledService } from '../wled.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WLEDData } from '../wledData';
import { WLEDInfo } from '../wledInfo';
import { WLEDState } from '../wledState';

@Component({
  selector: 'app-wleddata',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './wleddata.component.html',
  styleUrl: './wleddata.component.css'
})
export class WleddataComponent {
  title = 'wled-angular';
  wledService = inject(WledService);
  WledData: WLEDData | undefined;
  wledForm: FormGroup;

  constructor() {
    this.wledForm = new FormGroup({
      stateControl: new FormControl(''),
      infoControl: new FormControl(''),
      effectsControl: new FormControl(''),
      palettesControl: new FormControl('')
    });

    this.getWledData();
  }

  getWledData() {
    this.wledService.getWledData().then((data) => {
      this.WledData = data;
      if (this.WledData) {
        this.wledForm.patchValue({
          stateControl: this.WledData.state.on ? 'On' : 'Off',
          infoControl: this.WledData.info || '',
          effectsControl: this.WledData.effects || '',
          palettesControl: this.WledData.palettes || ''
        });
      }
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.wledForm.value);
  }
}
