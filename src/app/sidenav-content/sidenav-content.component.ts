import { Component } from '@angular/core';
import {MatListModule, MatNavList} from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [MatListModule, MatNavList, RouterLink],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {

}
