import { Routes } from '@angular/router';
import { WleddataComponent } from './wleddata/wleddata.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

export const routes: Routes = [
    {
        path: '',
        component: WleddataComponent,
        title: 'Home page',
      },
      {
        path: 'test',
        component: TestcomponentComponent,
        title: 'Second Page',
      },
];
