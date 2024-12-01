import { Routes } from '@angular/router';
import { WleddataComponent } from './wleddata/wleddata.component';
import { IpConfigComponent } from './ipconfig/ipconfig.component';

export const routes: Routes = [
    {
        path: '',
        component: WleddataComponent,
        title: 'Home page',
      },
      { path: 'config', component: IpConfigComponent }
];
