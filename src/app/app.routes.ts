import {Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import { ElevateComponent } from './components/elevate/elevate.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'elevate', component: ElevateComponent },
];
