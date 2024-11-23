import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavContentComponent, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, FormsModule, MatCheckboxModule, MatSidenavModule],
  template: `
  <main>
  <mat-toolbar color="primary">
    <button mat-icon-button (click)="sidenav.toggle()" class="menu-icon" aria-label="icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <h1>{{ title }}</h1>
  </mat-toolbar>
  <mat-sidenav-container class="container">
    <mat-sidenav #sidenav mode="side" [(opened)]="opened">
    <app-sidenav-content></app-sidenav-content> 
    </mat-sidenav>
    <mat-sidenav-content>
    <!-- Content -->
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    </mat-sidenav-content>
  </mat-sidenav-container>
  </main>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WLED Control';
  opened!: boolean;
  constructor() {
  }
}
