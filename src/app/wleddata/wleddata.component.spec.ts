import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WleddataComponent } from './wleddata.component';

describe('WleddataComponent', () => {
  let component: WleddataComponent;
  let fixture: ComponentFixture<WleddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WleddataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WleddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
