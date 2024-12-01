import { Component, inject, OnInit } from '@angular/core';
import { WledService } from '../wled.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WLEDData } from '../wledData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wleddata',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './wleddata.component.html',
  styleUrls: ['./wleddata.component.css']
})
export class WleddataComponent implements OnInit {
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
      selectedEffect: new FormControl(''),
      selectedPalette: new FormControl('')
    });
  }

  ngOnInit() {
    this.getWledData();
  }

  getWledData() {
    this.wledService.getWledData().then(data => {
      this.WledData = data;
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
          selectedEffect: this.WledData.effects[0] || '',
          selectedPalette: this.WledData.palettes[0] || ''
        });
      }
    });
  }

  onSubmit() {
    const formValue = this.wledForm.value;
    const effectIndex = this.WledData?.effects.indexOf(formValue.selectedEffect) ?? -1;
    const paletteIndex = this.WledData?.palettes.indexOf(formValue.selectedPalette) ?? -1;

    const stateData = {
      ...formValue.state,
      seg: formValue.state.seg.map((segment: any) => ({
        ...segment,
        fx: effectIndex,
        pal: paletteIndex
      }))
    };

    console.log('Submitting state data:', stateData);

    this.wledService.setWledData(stateData).catch(error => {
      console.error('Error updating WLED data:', error);
    });
  }
}