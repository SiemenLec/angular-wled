import { Component, inject } from '@angular/core';
import { WledService } from '../wled.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WLEDData } from '../wledData';
import { WLEDInfo } from '../wledInfo';
import { WLEDState } from '../wledState';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wleddata',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
      state: new FormGroup({
        on: new FormControl(false),
        bri: new FormControl(0),
        transition: new FormControl(0),
        ps: new FormControl(0),
        pl: new FormControl(0),
        nl: new FormGroup({
          on: new FormControl(false),
          dur: new FormControl(0),
          fade: new FormControl(false),
          tbri: new FormControl(0)
        }),
        udpn: new FormGroup({
          send: new FormControl(false),
          recv: new FormControl(false)
        }),
        seg: new FormControl([]) 
      }),
      effects: new FormControl([]),
      palettes: new FormControl([])
    });

    this.getWledData();
  }

  getWledData() {
    this.wledService.getWledData().then(data => {
      this.WledData = data;
      console.log('Fetched WLED Data:', this.WledData);
      if (this.WledData) {
        this.wledForm.patchValue({
          state: {
            on: this.WledData.state.on,
            bri: this.WledData.state.bri,
            transition: this.WledData.state.transition,
            ps: this.WledData.state.ps,
            pl: this.WledData.state.pl,
            nl: this.WledData.state.nl,
            udpn: this.WledData.state.udpn,
            seg: this.WledData.state.seg
          },
          info: this.WledData.info,
          effects: this.WledData.effects,
          palettes: this.WledData.palettes
        });
      }
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.wledForm.value);
  }
}
